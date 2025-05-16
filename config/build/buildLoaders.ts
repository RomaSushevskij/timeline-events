import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { BuildOptions } from "./types.ts";
import { createHash } from "crypto";
import type { LoaderContext } from "webpack";

function getLocalIdent(context: LoaderContext<unknown>, localIdentName: string, localName: string) {
  const fileName = context.resourcePath.split("/").pop() || "";
  const nameWithoutModule = fileName
    .replace(/\.module/, "") // убираем `.module`
    .replace(/\.[^/.]+$/, ""); // убираем расширение `.scss`, `.css`

  const hash = createHash("md5")
    .update(`${context.resourcePath}_${localName}`)
    .digest("base64")
    .replace(/[^a-zA-Z0-9]/g, "") // убираем недопустимые символы
    .slice(0, 8);

  return `${nameWithoutModule}__${localName}__${hash}`;
}

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const scssLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          url: {
            filter: (url: string) => {
              if (url.includes(".ttf")) {
                return false;
              }

              return true;
            },
          },
          modules: {
            auto: /\.module\.(scss|sass|css)$/i,
            getLocalIdent,
            namedExport: false,
            exportLocalsConvention: "asIs",
          },
        },
      },
      "sass-loader",
    ],
  };

  const fontLoader: webpack.RuleSetRule = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  };

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [tsLoader, scssLoader, fontLoader, svgLoader, fileLoader];
};
