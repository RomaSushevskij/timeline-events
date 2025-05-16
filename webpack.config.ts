import path from "path";
import webpack from "webpack";

import type { BuildEnv, BuildPaths } from "./config/build/types.ts";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "app", "index.tsx"),
    output: path.resolve(__dirname, "dist"),
    htmlTemplate: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode: webpack.Configuration["mode"] = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 3000;

  return buildWebpackConfig({ mode, paths, isDev, port });
};
