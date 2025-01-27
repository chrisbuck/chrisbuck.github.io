const path = require("path");
const { override, addWebpackAlias, useBabelRc } = require("customize-cra");

module.exports = override(
    // Add webpack aliases
    addWebpackAlias({
        ["@assets"]: path.resolve(__dirname, "src/assets"),
        ["@components"]: path.resolve(__dirname, "src/components"),
        ["@pages"]: path.resolve(__dirname, "src/pages"),
        ["@styles"]: path.resolve(__dirname, "src/styles"),
        ["@utils"]: path.resolve(__dirname, "src/utils"),
    }),

    // Use your .babelrc file
    //   useBabelRc()
);
