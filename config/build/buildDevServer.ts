import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from "./types.ts";

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    port: options.port,
    open: true,
    hot: true,
    historyApiFallback: true, // чтобы при обновлении страницы на роуте, отличном от рутового, всё работало нормально
  };
};
