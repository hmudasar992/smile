FROM node:18-alpine AS builder
WORKDIR /app

# 1. Copy package files first
COPY package.json package-lock.json ./

# 2. Install all dependencies including types
RUN npm ci --include=dev

# 3. Copy config files
COPY next.config.ts tsconfig.json ./

# 4. Copy remaining files
COPY . .

# 5. Build project
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

# 6. Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src/app/utils/imageLoader.js ./src/app/utils/

# 7. Add health check and proper port configuration
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME 0.0.0.0
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

# 8. Use node to run directly instead of npm for better signal handling
CMD ["node", "node_modules/.bin/next", "start"]


# run this command to create zip file
# zip -r nextjs-app.zip . -x "node_modules/*" ".git/*"


