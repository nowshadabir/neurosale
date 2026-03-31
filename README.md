# Neurosale

Next.js project configured with:

- Next.js App Router
- Node.js backend via API routes (`app/api/*`)
- Shadcn UI component library
- Prisma ORM with SQL database support (PostgreSQL datasource)

## 1. Install dependencies

```bash
npm install
```

## 2. Configure SQL database

Update `DATABASE_URL` in `.env`.

Example:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/neurosale?schema=public"
```

## 3. Generate Prisma client and run migrations

```bash
npm run prisma:generate
npm run prisma:migrate
```

## 4. Run the app

```bash
npm run dev
```

Open http://localhost:3000

## API routes

- `GET /api/health` - basic backend health check
- `GET /api/leads` - list latest leads
- `POST /api/leads` - create a lead (`name`, `email`, optional `company`)
