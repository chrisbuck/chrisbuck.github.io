import React from "react";

import styles from "./Section.module.scss";

import { getBgStyle, getColorStyle } from "@utils/";

const Section = ({ bgColor, color, children }) => {
    return (
        <section className={`section ${styles.section} ${getBgStyle(styles, bgColor)} ${getColorStyle(styles, color)}`}>
        {children}
        </section>
  );
}

export default Section;