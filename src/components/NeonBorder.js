import React from 'react';

import styles from "./NeonBorder.module.scss";

const NeonBorder = ({ children, theme }) => {
    return (
        <div className={styles.neonBorder}>
            <div className={styles.neonBorderInner}>
                <div className={`${styles.neonBorderContent} ${theme? styles[theme] : styles.neonPink}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default NeonBorder;