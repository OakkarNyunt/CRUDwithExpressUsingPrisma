# Frontend React + TypeScript + Vite + Shadcn

## Frontend Setup

```
npm install
```

```
npm run dev
```

# Backend Node + Express + Prisma ORM + PostgreSQL

```
npm install
```

```
npx prisma generate
```

In .env file, place correct PostgreSQL Database URL
you can check .evn-sample.
you can easily change .env-sample to .env and then type your db password & db name

```
DATABASE_URL="postgresql://postgres:YourPassword@localhost:5432/YourDBName?schema=public"
PORT=4000
```

```
 npx prisma migrate dev --name init
```

```npm run dev

```
