# Metabase Static Embedding Example (Next.js)

Before embedding, remember to publish your dashboard by following these steps:

1. Click on "Sharing" icon:

   ![Sharing](./public/sharing.png)

2. Select "Embed" option:

   ![Embed](./public/embed.png)

3. Click on "Publish" button:

   ![Publish](./public/publish.png)

## Configuring Environment Variables

Create a `.env` in the root of your project:

```
METABASE_SITE_URL=http://localhost:3000
METABASE_SECRET_KEY=<YOUR_METABASE_SECRET_KEY>
```

## Getting Started

First, install the dependencies by running:

```bash
npm install
```

Then, run the development server:

```bash
npx next dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Update Dashboard Embedding Data

Update `page.tsx` with your dashboard payload. You can see it on the embedding page.

Example:

```typescript
const payload = {
    resource: { dashboard: 2 },
    params: {},
    exp: Math.round(Date.now() / 1000) + (10 \* 60) // 10 minute expiration
};
```
