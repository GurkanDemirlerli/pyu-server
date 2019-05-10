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
        app: ["./src/index.ts"]
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
        },
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "index.js"
    },
    plugins: [
      new WebpackShellPlugin({
        onBuildEnd: ['npm run run:dev']
      })
    ],
    externals: [nodeExternals()]
}
