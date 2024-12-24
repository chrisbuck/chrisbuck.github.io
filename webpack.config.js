const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js", // Entry point for your application
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/", // Ensure this is correct
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Files to be processed by the loader
                exclude: /node_modules/, // Exclude the node_modules directory
                use: {
                    loader: "babel-loader", // Loader to use for transpiling
                },
            },
            {
                test: /\.css$/, // For CSS files
                use: ["style-loader", "css-loader"], // Loaders to process CSS files
            },
            {
                test: /\.scss$/, // For SASS/SCSS files
                use: ["style-loader", "css-loader", "sass-loader"], // Loaders to process SCSS files
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // HTML file to use as a template
        }),
    ],
    devServer: {
        static: "./dist",
        hot: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"], // Add other file extensions if needed
        alias: {
            // Define aliases here
            "@components": path.resolve(__dirname, "src/components/index"),
            "@/styles/*": path.resolve(__dirname, "src/styles/*"),
        },
    },
};
