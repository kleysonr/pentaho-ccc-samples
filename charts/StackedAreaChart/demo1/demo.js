def.setDebug(5);

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