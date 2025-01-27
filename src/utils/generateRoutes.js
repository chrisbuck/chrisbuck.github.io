import React from "react";

export const generateRoutes = () => {
    const context = require.context("../pages", true, /\.js$/);
    const routes = [];

    context.keys().forEach((file) => {
        const path = file
            .replace("./", "") // Remove "./" from the beginning of the string
            .replace(".js", "") // Remove ".js" from the end of the string
            .replace(/index$/, "") // Remove "index" for root routes
            .replace(/\/$/, ""); // Remove trailing slash

        const Component = context(file).default;

        // Ensure root route is '/' and subroutes are '/folder/file'
        routes.push({
            path: `/${path}`.replace(/\/+/g, "/"), // Ensure proper formatting for paths,
            Component,
        });
    });

    return routes;
};
