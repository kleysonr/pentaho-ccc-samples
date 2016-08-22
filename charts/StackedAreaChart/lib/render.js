$(function() {

	setFixedValues();
	
	new pvc.StackedAreaChart(cd)
		.setData(cdaData)
		.render();

});
	