import webpack from "webpack";

type BuildCopyOptions = {
  from: string;
  to: string;
};

export type BuildPaths = {
  entry: string;
  output: string;
  htmlTemplate: string;
  src: string;
};

export type BuildOptions = {
  mode: webpack.Configuration["mode"];
  paths: BuildPaths;
  isDev: boolean;
  port: number;
};

export type BuildEnv = {
  mode: webpack.Configuration["mode"];
  port: number;
};
