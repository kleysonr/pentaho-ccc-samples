var cggFormat = { 
    
    formatDate:{
        one : {
            moment : "DD-MM-YYYY",
            pv: "%Y%m%d"//"%d-%m-%Y",
        },
        Day : {
            param : "YYYYMMDD",
            label: "DD MMMM YYYY",
            tickUnit: "d",
            tickFormat: "DD"
        },
        Week : {
            param : "YYYY[-CW]WW",
            label: "DD MMMM YYYY",
            tickUnit: "7d",
            tickFormat: "MMM DD"
        },
        Month : {
            param : "MMM YYYY",
            label: "MMMM YYYY",
            tickUnit: "m",
            tickFormat: "MMM"
        },
        Quarter : {
            param : "YYYY[-Q]Q",
            label: "[Q]Q YYYY",
            tickUnit: "3m",
            tickFormat: "[Q]Q"
        },
        Year : {
            param : "YYYY",
            label: "YYYY",
            tickUnit: "y",
            tickFormat: "YY"
        }
    },
};