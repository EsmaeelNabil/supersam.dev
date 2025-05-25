#!/bin/bash

# Build and deploy script for personal website
set -e

echo "🚀 Building and deploying personal website..."

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t esmaeel-website:latest .

echo "✅ Docker image built successfully!"

# Check if container is already running
if [ "$(docker ps -q -f name=esmaeel-website)" ]; then
    echo "🔄 Stopping existing container..."
    docker stop esmaeel-website
    docker rm esmaeel-website
fi

# Run the container
echo "🚀 Starting new container..."
docker run -d \
    --name esmaeel-website \
    -p 3000:3000 \
    --restart unless-stopped \
    esmaeel-website:latest

echo "✅ Website deployed successfully!"
echo "🌐 Visit: http://localhost:3000"

# Show container status
echo "📊 Container status:"
docker ps -f name=esmaeel-website
