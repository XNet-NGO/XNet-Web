#!/bin/bash
set -e

IMAGE="xnet-web:latest"
CONTAINER="xnet-web"

echo "[deploy] Building $IMAGE..."
docker build -t "$IMAGE" "$(dirname "$0")/.."

echo "[deploy] Replacing container..."
docker rm -f "$CONTAINER" 2>/dev/null || true
docker run -d --name "$CONTAINER" \
  --restart unless-stopped \
  --network host \
  --env-file "$(dirname "$0")/../.env.production" \
  -e PORT=3000 \
  -e HOSTNAME=0.0.0.0 \
  "$IMAGE"

echo "[deploy] Waiting for health check..."
for i in $(seq 1 15); do
  if curl -sf http://localhost:3000 > /dev/null 2>&1; then
    echo "[deploy] ✓ Live at https://xnet.ngo"
    exit 0
  fi
  sleep 1
done
echo "[deploy] ✗ Health check failed"
docker logs "$CONTAINER" --tail 20
exit 1
