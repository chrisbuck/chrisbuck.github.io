export const getBgStyle = (styles, bgColor) => {
    switch (bgColor) {
        case "blueGrey":
            return styles.blueGreyBg;
        case "brown":
            return styles.brownBg;
        case "charcoal":
            return styles.charcoalBg;
        case "hotPink":
            return styles.hotPinkBg;
        case "whiteBlue":
            return styles.whiteBlueBg;
        case "lightGrey":
            return styles.lightGreyBg;
        case "lightPink":
            return styles.lightPinkBg;
        case "maroon":
            return styles.maroonBg;
        case "neonBgDark":
            return styles.neonBgDarkBg;
        case "pink":
            return styles.pinkBg;
        case "purpleBlue":
            return styles.purpleBlueBg;
        case "red":
            return styles.redBg;
        case "white":
            return styles.whiteBg;
        default:
            return styles.charcoalBg;
    }
}

export const getColorStyle = (styles, color) => {
    switch (color) {
        case "blueGrey":
            return styles.blueGrey;
        case "brown":
            return styles.brown;
        case "charcoal":
            return styles.charcoal;
        case "hotPink":
            return styles.hotPink;
        case "whiteBlue":
            return styles.whiteBlue;
        case "lightGrey":
            return styles.lightGrey;
        case "lightPink":
            return styles.lightPink;
        case "maroon":
            return styles.maroon;
        case "neonBgDark":
            return styles.neonBgDark;
        case "pink":
            return styles.pink;
        case "purpleBlue":
            return styles.purpleBlue;
        case "red":
            return styles.red;
        case "white":
            return styles.white;
        default:
            return styles.charcoal;
}}