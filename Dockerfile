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

CMD ["npm", "start"]

# run this command to create zip file
# zip -r nextjs-app.zip . -x "node_modules/*" ".git/*"


