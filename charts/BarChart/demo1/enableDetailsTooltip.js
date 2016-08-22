// For categoryDetailsTooltip extension
var formatter = pvc.ext.categoryDetailsTooltip(),
    baseRenderer = formatter.renderer(),
    baseFormat = formatter.format;

formatter.format = function(scene) {
    var model = baseFormat.call(formatter, scene);
    var seriesIndex = scene.parent.childIndex();
    if(model.details)
        model.details = [model.details[seriesIndex]];
    
    return baseRenderer.call(formatter, model);
};

formatter
    .renderer(function(model) { return model; })
    .showTotal(false)
    .categoryVisible(false)
    .ignoreNulls(false)
    .install(cd);
    
//    
var selectCategory = function() {
  var myParam = chartSelectionParam,
      granularity = granularityFormatParam;
  return moment(myParam, "YYYYMMDD")._d;
};
