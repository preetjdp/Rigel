/**
 * The reference for the PDF Theme
 *
 * https://github.com/cepharum/marked-renderer-pdf/blob/31d7f8acd7df8bd1fcb9e055d49255524e8e9323/theme/index.js#L70-L143
 */

export const RegelTheme = {
    style: {
        font: {
            // proportional: Fonts.sansSerif,
            // monospace: Fonts.monospace,
            // symbol: Fonts.symbol,
        },
        document: {
            // padding: 2 * PDF.cm,
        },
        text: {
            fontFamily: {
                // proportional: Fonts.sansSerif,
                // monospace: Fonts.monospace,
            },
            fontSize: 11,
            lineHeight: 1.3,
            color: "#000000",
        },
        ruler: {
            width: 0.1,
            color: "black",
            // indent: 2 * PDF.cm,
            paddingTop: 0,
            // paddingBottom: 0.3 * PDF.cm,
        },
        paragraph: {
            // marginTop: ( index, num ) => ( index < num - 1 ? 0.3 * PDF.cm : 0 ),
        },
        code: {
            // marginTop: ( index, num ) => ( index < num - 1 ? 0.3 * PDF.cm : 0 ),
        },
        blockquote: {
            // marginTop: ( index, num ) => ( index < num - 1 ? 0.3 * PDF.cm : 0 ),
            // paddingLeft: PDF.cm,
        },
        list: {
            item: {
                // indent: 0.8 * PDF.cm,
                // bulletPadding: 0.2 * PDF.cm,
                bulletAlign: "right",
                // bulletFont: Fonts.sansSerif.regular,
                bullet: (ordered, level) =>
                    "\u2022\u25e6\u2013"[Math.min(2, level)],
                index: (ordered, level, index) =>
                    level > 1
                        ? "%d)"
                        : level > 0
                            ? "abcdefghijklmnopqrstuvwxyz"[index - 1] + "."
                            : "%d.",
            },
            // paddingBottom: ( level, index, numItems ) => ( level > 0 ? 0 : index === numItems - 1 ? 0.3 * PDF.cm : 0 ),
        },
        table: {
            cellPadding: 5,
            borderHorizontalWidths: () => (i) => (i < 2 ? 1 : 0.1),
            borderHorizontalColors: () => () => "#000000",
            borderVerticalWidths: (numColumns) =>
                Array(numColumns + 1).fill(0.5),
            borderVerticalColors: (numColumns) =>
                [...Array(numColumns + 1)].map((_, i) =>
                    i % 2 ? "#ff0000" : "#0000ff"
                ),
            // fontHeader: Fonts.sansSerif.bold,
            padding: {
                top: 0,
                // bottom: ( cols, hRows, bRows, index, num ) => ( index < num - 1 ? 0.3 * PDF.cm : 0 ),
            },
        },
        heading: {
            // fontFamily: Fonts.serif,
            // fontSize: 36,
            fontSize: (level) =>
                [36, 32, 24, 18, 18, 18][Math.min(5, level - 1)],
            bold: (level) =>
                [true, true, true, true, false, false][
                Math.min(5, level - 1)
                ],
            italic: false,
            lineHeight: 1.3,
            color: "#383838",
            // color: (level) =>
            //     [
            //         "#c30045",
            //         "#c30045",
            //         "#c30045",
            //         "#c30045",
            //         "#c30045",
            //         "#000000",
            //     ][Math.min(5, level - 1)],
            padding: {
                top: (level) => [72, 40, 30][Math.min(2, level - 1)],
                bottom: (level) => [24, 12, 12, 6][Math.min(3, level - 1)],
            },
            align: "left",
        },
    },
};