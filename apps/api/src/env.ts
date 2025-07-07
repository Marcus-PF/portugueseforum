export interface Env {
  MONGODB_URI: string;
  JWT_SECRET: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}