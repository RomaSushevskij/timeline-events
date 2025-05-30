import webpack from "webpack";

import type { BuildOptions } from "./types.ts";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
      publicPath: "/",
    },
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
