/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VVITE_BACKEND_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
