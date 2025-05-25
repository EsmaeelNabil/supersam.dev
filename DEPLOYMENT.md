# 🚀 Deployment Guide

This guide covers different ways to deploy your personal website using Docker.

## Prerequisites

- Docker installed on your system
- Your website code ready (all personal information configured)

## Local Docker Testing

1. **Test the build locally:**
   ```bash
   npm run build
   ```

2. **Build Docker image:**
   ```bash
   docker build -t esmaeel-website .
   ```

3. **Run the container:**
   ```bash
   docker run -p 3000:3000 esmaeel-website
   ```

4. **Visit:** http://localhost:3000

## Production Deployment Options

### Option 1: Using Docker Compose (Recommended)

1. **Create production environment file:**
   ```bash
   cp .env.production.example .env.production
   # Edit .env.production with your values
   ```

2. **Deploy:**
   ```bash
   docker-compose up --build -d
   ```

3. **Check status:**
   ```bash
   docker-compose ps
   docker-compose logs -f web
   ```

### Option 2: Using the Deployment Script

1. **Run the script:**
   ```bash
   ./deploy.sh
   ```

This script will:
- Build the Docker image
- Stop any existing container
- Start a new container
- Show container status

### Option 3: Manual Docker Commands

1. **Build:**
   ```bash
   docker build -t esmaeel-website:latest .
   ```

2. **Run:**
   ```bash
   docker run -d \
     --name esmaeel-website \
     -p 3000:3000 \
     --restart unless-stopped \
     esmaeel-website:latest
   ```

## Cloud Platform Deployment

### DigitalOcean App Platform

1. **Push to GitHub repository**
2. **Connect DigitalOcean to your repo**
3. **Configure build settings:**
   - Source: Dockerfile
   - HTTP Port: 3000
   - Environment Variables: Add your production vars

### Railway

1. **Connect GitHub repository to Railway**
2. **Railway will automatically detect Dockerfile**
3. **Set environment variables in Railway dashboard**
4. **Deploy with one click**

### Render

1. **Create new Web Service from GitHub**
2. **Use Docker environment**
3. **Set build command:** `docker build -t app .`
4. **Set start command:** `docker run -p 10000:3000 app`

### AWS ECS/Fargate

1. **Push image to ECR:**
   ```bash
   # Create ECR repository
   aws ecr create-repository --repository-name esmaeel-website
   
   # Get login command
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-1.amazonaws.com
   
   # Tag and push
   docker tag esmaeel-website:latest 123456789012.dkr.ecr.us-east-1.amazonaws.com/esmaeel-website:latest
   docker push 123456789012.dkr.ecr.us-east-1.amazonaws.com/esmaeel-website:latest
   ```

2. **Create ECS task definition and service**

### Google Cloud Run

1. **Build and push to Google Container Registry:**
   ```bash
   gcloud builds submit --tag gcr.io/PROJECT-ID/esmaeel-website
   ```

2. **Deploy to Cloud Run:**
   ```bash
   gcloud run deploy --image gcr.io/PROJECT-ID/esmaeel-website --port 3000
   ```

## VPS Deployment

### Using Docker on VPS

1. **Copy files to VPS:**
   ```bash
   rsync -av . user@your-vps:/path/to/website/
   ```

2. **SSH to VPS and build:**
   ```bash
   ssh user@your-vps
   cd /path/to/website
   docker build -t esmaeel-website .
   docker run -d -p 80:3000 --name esmaeel-website esmaeel-website
   ```

### With Nginx Proxy (Recommended for VPS)

1. **Run website container:**
   ```bash
   docker run -d --name esmaeel-website -p 127.0.0.1:3000:3000 esmaeel-website
   ```

2. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables for Production

```env
NODE_ENV=production
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Your Google Analytics ID
```

## Monitoring and Maintenance

### Health Checks

The Docker container includes health checks. Monitor with:

```bash
docker inspect --format='{{.State.Health.Status}}' esmaeel-website
```

### Logs

```bash
# View logs
docker logs esmaeel-website

# Follow logs
docker logs -f esmaeel-website
```

### Updates

To update your website:

1. **Pull latest code**
2. **Rebuild Docker image**
3. **Stop old container and start new one**

Or use the deployment script:
```bash
./deploy.sh
```

## Performance Optimization

- **Image size**: ~150MB (optimized with Alpine and standalone output)
- **Memory usage**: ~100MB RAM
- **CPU**: Minimal (Node.js server)
- **CDN**: Consider using Cloudflare for static assets

## Docker Image Optimization 🚀

This project includes two highly optimized Dockerfiles for different use cases:

### Image Options

| Dockerfile | Base Image | Size | Security | Use Case |
|------------|------------|------|----------|----------|
| `Dockerfile` | Google Distroless | ~150MB | Highest | Production (Recommended) |
| `Dockerfile.minimal` | Alpine Linux | ~120MB | High | Size-critical deployments |

### Optimization Features

- **Multi-stage builds** with aggressive cleanup
- **Minimal runtime dependencies** - only essential files
- **Enhanced .dockerignore** - reduces build context by 80%
- **Production-only installs** - no dev dependencies in final image
- **Compressed node_modules** - removes docs, tests, maps
- **Non-root security** - runs as unprivileged user
- **Standalone output** - Next.js optimized for containers

### Quick Size Comparison

Run the optimization comparison script:

```bash
./optimize-docker.sh
```

This will build both images and compare:
- Build times
- Final image sizes  
- Layer analysis
- Runtime tests

### Manual Build Commands

**Standard (Distroless):**
```bash
docker build -f Dockerfile -t supersamdev:standard .
```

**Minimal (Alpine):**
```bash
docker build -f Dockerfile.minimal -t supersamdev:minimal .
```

### Image Size Breakdown

The optimizations achieve:
- **90% reduction** from typical Next.js images (~1.2GB → ~120-150MB)
- **Removed**: Source code, build tools, dev dependencies, docs
- **Kept**: Only runtime essentials and built application

---

## Quick Start 🏃‍♂️

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Start the production server:**
   ```bash
   npm start
   ```

Now your website is running in production mode!

---

Your personal website is now ready for production deployment using Docker! Choose the deployment method that best fits your needs and infrastructure.
