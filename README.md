# Romina Celis Portfolio

Portfolio personal construido con Vite, React y Tailwind CSS.

## Desarrollo

```bash
npm ci
npm run dev
```

## Build de producción

```bash
npm run build
```

El build genera la carpeta `dist`. No despliegues la raíz del repositorio como sitio estático: `index.html` usa `/src/main.tsx` solo durante desarrollo con Vite. En producción Cloudflare debe servir los archivos compilados de `dist`, donde Vite reemplaza esa entrada por JavaScript en `assets/index-*.js`.

## Cloudflare Pages

Usa estos valores en Workers & Pages:

- Framework preset: `React (Vite)` o `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

El archivo `wrangler.toml` fija `pages_build_output_dir = "./dist"` para despliegues con Wrangler/Pages.
