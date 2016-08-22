var chartSelectionParam = "";
var granularityFormatParam = "Day";

var cd = {
    	canvas: "chartDiv",
    
        height : 273,
        animate : false,
        plotFrame_strokeStyle : 'transparent',
        tooltipEnabled : true,
        margins : {bottom:15, left:5, right:5, top:15},
        hoverable :  true,
        crosstabMode : false,
        seriesInRows : true,
        timeSeries : true,
        stacked : true,
        
        // CARTESIAN AXES
        baseAxisRule_strokeStyle: 'transparent',
        colors : ["#0066CC","#23C1FF"],
        baseAxisScale_dateTickWeekStart : "monday",
        baseAxisLabel_cursor : 'pointer',
        baseAxisOverlappedLabelsMode : 'leave',
        orthoAxisDesiredTickCount : 2,
        axisLabel_font : 'lighter 9px "Neue Haas Custom Font", Arial, Verdana, sans-serif',
        
        // LEGEND PANEL           
        legend : true,
        legendPosition : 'top',
        legendAlign : 'right',
        legendDot_fillStyle : function(scene) { return scene.color; },
        legendDot_imask: "ShowsActivity",
        legendDot_ibits: 0,
        legendDot_shape: 'square',
        legendDot_shapeSize : pvc.finished(18),
        legendDot_lineWidth : 0,
        legend2Rule_width: 12,
        legendLabel_font : 'lighter 9px "Neue Haas Custom Font", Arial, Verdana, sans-serif',
        legendLabel_textStyle : '#4B4B4B',
        legendMargins: {bottom: 15},
        legendItemPadding: 10,
        
        // PLOT2
        plot2: false,
        color2AxisColors : '#52CC83',
        plot2Line_lineWidth : pvc.finished(2),
        plot2Line_cursor : 'default',
        plot2Line_imask : "Hoverable",
        plot2Line_ibits : 0,
        plot2Dot_imask : "Hoverable",
        plot2Dot_ibits : 0,
        plot2Area_imask :  "Hoverable",
        plot2Area_ibits : 0,
        plot2Dot_fillStyle : "",
        plot2Dot_cursor : 'default',
        plot2Dot_strokeStyle : "",
        
        // ortho axis settings
        orthoAxisRule_strokeStyle: 'transparent',
        orthoAxisMinorTicks: false,
        orthoAxisTicks : false,
        orthoAxisMinorTicks: false,
        orthoAxisGrid : true,
        orthoAxisFixedMin : 0,
        
        //reverse colors
        //seriesRole : {isReversed:true},
        colorRole : {isReversed:true},
        
        dimensions : {
            "series": {
                formatter: function(value) {
                    switch(value) {
                        case "HB": return "HB Label";
                        case "HA": return "HA Label";
                    }
                    return value;
                }
            },
            category: {
                converter: function(rawValue) {
                        var granularity = granularityFormatParam;
                            return moment(rawValue, "YYYYMMDD");
                    }
            }
        },
        
        bar_fillStyle : function(scene) {
            var myColor = this.delegate();
            return scene.isActive ? myColor : this.finished(this.delegate()); 
        },
        
              
        baseAxisTicksPanel_call : function() {
        	new pvc.visual.Bar(this.sign.panel, this, {freeColor : true, normalStroke : true, noTooltip : true, noHover : false, noSelect : false})
                .pvMark                                          
                .fillStyle(function(scene){
                	var selected = +this.getContext().getTick() ===  +selectCategory();  return selected   ? '#CD040A' : '#FFFFFF';
                })
                .strokeStyle(null)
                .top(4)
                .left(function(){
                    var granularity = granularityFormatParam;
                    if (granularity == 'Week'){
                        return -18;
                    }else if (granularity == 'Month'){
                        return -14;
                    }else{
                        return -10;
                    }
                })
                .visible(true)
                .zOrder(20)
                .cursor('pointer')
                .height(function(){
                    var granularity = granularityFormatParam;
                    if (granularity == 'Day'){
                        return 36;
                    }else{
                        return 16;
                    }
                })
                .width(function(){
                    var granularity = granularityFormatParam;
                    if (granularity == 'Week'){
                        return 37;
                    }else if (granularity == 'Month'){
                        return 29;
                    }else{
                        return 20;
                    }
                });
        },
        
        baseAxisLabel_textStyle : function() {
        	var selected = +this.getTick() ===  +selectCategory();
            	return selected   ? 'white' : 'black';
            },
        
        baseAxisTickUnit : function() {
            var granularity = granularityFormatParam;
            	return "d";
            }(),
        
        baseAxisLabel_text :  function(scene) {
            	return scene.vars.tick.label.split('|')[0];
            }, 
                                            
        baseAxisLabel_add :  function() {
            var label = new pv.Label();
            label.visible(function() { return true; })
                .text(function(scene) {
                    return scene.vars.tick.label.split('|')[1];
                })
                .textStyle(function(scene) {
                    var selected = +scene.getTick() ===  +selectCategory();
                        return selected   ? 'white' : 'black';
                    })
                .top(18)
                .zOrder(20);
            return label;
            
        },   
                                
        baseAxisTickFormatter : function(value, precision, index) {
            var granularity = granularityFormatParam,
                valueFormat = moment(value).format("DD");
                if (granularity == "Day"){
                    var valueFormatDayWeek = moment(value).format('dd');
                    return valueFormat + "|" + valueFormatDayWeek ;
                }else{
                    return valueFormat;
                } 
            },
        
        baseAxisTicksPanel_event : [[
            'click', function(scene) {
                var chartSelection = chartSelectionParam,
                    currCat = scene.vars.tick.value,
                    granularity = granularityFormatParam,
                    valueFormat = moment(currCat).format("YYYYMMDD");
                 
                if ( chartSelection === "" || chartSelection != valueFormat ){
                     chartSelectionParam = valueFormat;
                     this.chart.renderInteractive();
                }else{
                    this.chart.renderInteractive();
                    chartSelectionParam = '';
                }
            }
        ]]
};