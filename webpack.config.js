const path = require("path")
const nodeExternals = require("webpack-node-externals")
const WebpackShellPlugin = require('webpack-shell-plugin');

const config = {
   mode: 'development'
}

module.exports = {
    mode: config.mode,
    target: "node",
    entry: {
        index: './src/index.ts',
        seed: './src/seed/index.ts',
        dropdb: './src/seed/dropDatabase.ts',
    },
    watch: config.mode === 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            '@models': path.resolve(__dirname, "src/_models"),
            '@middlewares': path.resolve(__dirname, "src/middlewares"),
            '@controllers': path.resolve(__dirname, "src/@controllers"),
            '@repositories': path.resolve(__dirname, "src/@repository"),
            '@routes': path.resolve(__dirname, "src/@routes"),
            '@services': path.resolve(__dirname, "src/@services"),
            '@entities': path.resolve(__dirname, "src/entities"),
            '@common': path.resolve(__dirname, "src/common"),
            '@errors': path.resolve(__dirname, "src/errors"),
            '@ioc': path.resolve(__dirname, "src/ioc"),
            '@seed': path.resolve(__dirname, "src/seed"),
            '@helpers': path.resolve(__dirname, "src/helpers"),
            '@exceptions': path.resolve(__dirname, "src/exceptions"),
            '@enums': path.resolve(__dirname, "src/enums")
        },
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "[name].js"
    },
    plugins: [
      new WebpackShellPlugin({
        onBuildEnd: ['npm run watch']
      })
    ],
    externals: [nodeExternals()],
    devtool: "source-map"
}
