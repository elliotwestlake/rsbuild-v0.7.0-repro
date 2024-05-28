import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";

export default defineConfig({
  plugins: [
    pluginReact({
      reactRefreshOptions: {
        exclude: [/\.css\.ts$/, /node_modules/i],
      },
    }),
  ],

  tools: {
    rspack: {
      plugins: [new VanillaExtractPlugin({})],
    },
  },
});
