import React from "react";

import headingStyles from "./Heading.module.scss";

import { getColorStyle } from "@utils/";

const Heading = ({ h, color, styles, children }) => {
    switch (h) {
        case "h1":
            return <h1 className={`heading ${styles} ${getColorStyle(headingStyles, color)}`}>{children}</h1>;
        case "h2":
            return <h2 className={`heading ${styles} ${getColorStyle(headingStyles, color)}`}>{children}</h2>;
        case "h3":
            return <h3 className={`heading ${styles} ${getColorStyle(headingStyles, color)}`}>{children}</h3>;
        case "h4":
            return <h4 className={`heading ${styles} ${getColorStyle(headingStyles, color)}`}>{children}</h4>;
        case "h5":
            return <h5 className={`heading ${styles} ${getColorStyle(headingStyles, color)}`}>{children}</h5>;
        case "h6":
            return (
                <h6 className={`heading ${headingStyles.section} ${getColorStyle(headingStyles, color)}`}>
                    {children}
                </h6>
            );
        default:
            return (
                <h1 className={`heading ${headingStyles.section} ${getColorStyle(headingStyles, color)}`}>
                    {children}
                </h1>
            );
    }
};

export default Heading;
