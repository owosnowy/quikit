import { defineConfig } from "drizzle-kit";
import config from "./config";
export default defineConfig({
  schema: config.orm.schema,
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});