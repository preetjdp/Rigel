/**
 * A array of Months
 */
export const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

/**
 * Generate a array of years
 * 
 * 1980 -> 2050
 */
export const years = [...Array(50).keys()].map((e) => (e + 2030).toString())