def.setDebug(5);

var cdaData = {
   "resultset":[
      ["2015-01-01", 6, 1, 10],
      ["2015-01-02", 7, 2, 10],
      ["2015-01-03", 13, 3, 10],
      ["2015-01-04", 15, 4, 10],
      ["2015-01-05", 20, 5, 10],
      ["2015-01-06", 14, 6, 10],
      ["2015-01-07", 15, 7, 10],
      ["2015-01-08", 11, 8, 10],
      ["2015-01-09", 10, 9, 10],
      ["2015-01-10", 11, 10, 10],
      ["2015-01-11", 17, 11, 10],
      ["2015-01-12", 14, 12, 10],
      ["2015-01-13", 15, 13, 10],
      ["2015-01-14", 11, 14, 10],
      ["2015-01-15", 12, 15, 10],
      ["2015-01-16", 13, 16, 10],
      ["2015-01-17", 12, 15, 10],
      ["2015-01-18", 9, 14, 10],
      ["2015-01-19", 13, 13, 10],
      ["2015-01-20", 18, 12, 10],
      ["2015-01-21", 15, 11, 10],
      ["2015-01-22", 12, 10, 10],
      ["2015-01-23", 16, 9, 10],
      ["2015-01-24", 20, 8, 10],
      ["2015-01-25", 19, 7, 10],
      ["2015-01-26", 20, 6, 10],
      ["2015-01-27", 15, 5, 10],
      ["2015-01-28", 10, 4, 10],
      ["2015-01-28", 13, 3, 10],
      ["2015-01-30", 9, 2, 10]
   ],

   "metadata":[
      {"colIndex":0,"colType":"String","colName":"Date"},
      {"colIndex":1,"colType":"Integer","colName":"Idle Time"},
      {"colIndex":2,"colType":"Integer","colName":"Estimated"},
      {"colIndex":3,"colType":"Integer","colName":"Benchmark"}
   ]
};
            
new pvc.StackedAreaChart({
    canvas: "cccExample",
    
    // CHART
    height : 400,
    width : 800,
    crosstabMode : true,

    timeSeries: true,
    timeSeriesFormat: "%Y-%m-%d",

    // COLOR AXIS
    colors : ['#C74A53'],

    // COLOR2 AXIS
    color2AxisColors : ['#202020'],

    // PLOT2
    plot2: true,
    plot2DotsVisible:  false,
    plot2Line_lineWidth : pvc.finished(1),
    plot2Dot_fillStyle : "#FFF",
    plot2Series: ['Estimated', 'Benchmark'],
    plot2Line_strokeDasharray: function(scene) { 
      return (scene.atoms.series.value == "Estimated") ? "Dash" : this.delegate() 
    },

    // CARTESIAN AXES
    baseAxisRule_strokeStyle: '#CCCCCC',
    axisLabel_font : 'normal 12px Arial, Verdana, sans-serif',
    axisLabel_textStyle : '#797979',

    // LEGEND PANEL           
    legend : true,
    legendPosition : 'top',
    legendAlign : 'right',

    // ortho axis settings
    orthoAxisGrid:true,
    orthoAxisTicks : false,
    orthoAxisMinorTicks: false,
    orthoAxisLabel_visible: false
})
.setData(cdaData)
.render();