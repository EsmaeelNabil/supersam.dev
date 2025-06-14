# ULTRA-OPTIMIZED DOCKERFILE FOR MINIMAL IMAGE SIZE
# Multi-stage build with distroless final image for security and size

# ===== BASE STAGE =====
# Use standard Node.js (not Alpine) to avoid lightningcss musl compatibility issues
FROM --platform=linux/amd64 node:24-slim AS base
# Install only essential system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# ===== PRODUCTION DEPENDENCIES STAGE =====
FROM base AS deps
# Copy package files for dependency resolution
COPY package.json package-lock.json* ./

# Install ONLY production dependencies with aggressive optimization
RUN if [ -f package-lock.json ]; then \
    npm ci --only=production --no-audit --no-fund --no-optional --silent && \
    npm cache clean --force && \
    rm -rf ~/.npm /tmp/* /var/cache/apk/* && \
    find node_modules -name "*.md" -delete && \
    find node_modules -name "*.txt" -delete && \
    find node_modules -name "LICENSE*" -delete && \
    find node_modules -name "CHANGELOG*" -delete; \
  else \
    echo "❌ package-lock.json not found!" && exit 1; \
  fi

# ===== BUILD STAGE =====
FROM base AS builder
WORKDIR /app

# Copy cleaned production dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json* ./

# Install ALL dependencies for building (including dev)
RUN if [ -f package-lock.json ]; then \
    npm ci --no-audit --no-fund --no-optional --silent && \
    # Explicitly install lightningcss to ensure native binaries are available \
    npm install lightningcss --force && \
    npm cache clean --force && \
    rm -rf ~/.npm /tmp/*; \
  else \
    echo "❌ package-lock.json not found!" && exit 1; \
  fi

# Copy source code (leverages .dockerignore for exclusions)
COPY . .

# Build with maximum optimization
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV SKIP_YARN_COREPACK_CHECK=1

# Build and clean up in separate steps for better error handling
RUN npm run build

# Clean up unnecessary files after successful build
RUN rm -rf node_modules src content && \
    rm -rf *.config.* *.json *.md .env* .git* && \
    rm -rf .next/cache && \
    find .next -name "*.map" -delete 2>/dev/null || true

# ===== ULTRA-MINIMAL RUNTIME STAGE =====
# Use Google's distroless image - smallest and most secure
FROM --platform=linux/amd64 gcr.io/distroless/nodejs18-debian11:nonroot AS runner

# Set optimal production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3004
ENV HOSTNAME="0.0.0.0"

WORKDIR /app

# Copy ONLY essential runtime files with proper ownership
COPY --from=builder --chown=nonroot:nonroot /app/public ./public
COPY --from=builder --chown=nonroot:nonroot /app/.next/standalone ./
COPY --from=builder --chown=nonroot:nonroot /app/.next/static ./.next/static

# Use non-root user (pre-configured in distroless)
USER nonroot

# Expose application port
EXPOSE 3004

# Start application with minimal command
CMD ["server.js"]
