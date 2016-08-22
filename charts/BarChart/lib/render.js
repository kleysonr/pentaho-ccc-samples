$(function() {

	setFixedValues();
	
	new pvc.BarChart(cd)
		.setData(cdaData)
		.render();

});
