import { Unkey } from "@unkey/api";

if (!process.env.UNKEY_TOKEN) {
  throw new Error("UNKEY_TOKEN is not set");
}

export const unkey = new Unkey({ token: process.env.UNKEY_TOKEN });
