const { env } = process;

const envLoadError = (envVar: string) =>
  `Could not load ${envVar} env variable`;

//=====Env consts=====
export const PORT = process.env.PORT || 8080;
if (!PORT) throw new Error(envLoadError("PORT")); //Should never error but for consistancy

export const CERT_DIR = env.CERT_DIR;
if (!CERT_DIR) throw new Error(envLoadError("CERT_DIR"));

export const DB_HOST = env.DB_HOST;
if (!DB_HOST) throw new Error(envLoadError("DB_HOST"));

export const DB_PORT = Number(env.DB_PORT);
if (!DB_PORT) throw new Error(envLoadError("DB_PORT"));

export const DB_USER = env.DB_USER;
if (!DB_USER) throw new Error(envLoadError("DB_USER"));

export const DB_PASS = env.DB_PASS;
if (!DB_PASS) throw new Error(envLoadError("DB_PASS"));

export const DB_NAME = env.DB_NAME;
if (!DB_NAME) throw new Error(envLoadError("DB_NAME"));

export enum ErrorCode {
  NOT_FOUND,
}
