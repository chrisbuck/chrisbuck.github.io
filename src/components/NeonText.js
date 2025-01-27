import React from 'react';

import styles from "./NeonText.module.scss";

const NeonText = ({ fontSize, text, theme }) => {
    
    const reflectText = (text) => {
        // return text.split('').reverse().join('');
        return text;
    }

    return (
        <div style={{ fontSize: fontSize ? fontSize : "45px" }} className={`${styles.neonText} ${theme ? styles[theme] : styles.neonPink}`}>
            <div className={styles.text}>
                <span className={styles.neonTextBg}>{text}</span>
                <span className={styles.neonTextFg}>{text}</span>
            </div>
            <div className={styles.reflect}>
                <span className={styles.reflectTextBg}>{reflectText(text)}</span>
                <div className={styles.reflectFg}></div>
            </div>
        </div>
    );
}

export default NeonText;