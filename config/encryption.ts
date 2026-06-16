import env from "#start/env";
import { drivers } from "@adonisjs/core/encryption";
import { defineConfig } from "@adonisjs/core/encryption";

export default defineConfig({
  default: 'legacy',
  list: {
    legacy: drivers.legacy({
      keys: [env.get('APP_KEY')]
    })
  }
})
