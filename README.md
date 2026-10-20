# Polygon DID Demo

> **This demo has moved.** It now lives inside the [`polygon-did-modules`](https://github.com/ayanworks/polygon-did-modules)
> monorepo as [`apps/demo-api`](https://github.com/ayanworks/polygon-did-modules/tree/main/apps/demo-api),
> where it consumes the DID registrar/resolver packages through `workspace:*` and shares the workspace
> lockfile, CI, type checks and test suite.
>
> Run it from the monorepo:
>
> ```bash
> git clone https://github.com/ayanworks/polygon-did-modules.git
> cd polygon-did-modules
> pnpm install
> pnpm --filter @ayanworks/polygon-did-demo-api dev
> ```
>
> Swagger UI: `http://localhost:8081/index`

## Legacy install (original demo app)

```
npm install
```

## Running the Demo app

```
npm run start
```

This will run the app on `http://localhost:8081/index`, where you can access the Swagger APIs.
