$(function() {
	dataOfPieChart = [ 100, 100];
	dataOfDoughnutChart = [ 10, 20, 30, 40 ];
	dataOfHorizontalBarChart = [ 100, 50, 10 ];
	stateName = 'INDIA';

	pieChart = document.getElementById("pieChart").getContext('2d');
	doughnutChart = document.getElementById("doughnutChart").getContext(
			'2d');
	horizontalBarChart = document.getElementById("horizontalBar")
			.getContext('2d');

	pieChart1 = document.getElementById("pieChart1").getContext('2d');
	doughnutChart1 = document.getElementById("doughnutChart1").getContext(
					'2d');
	horizontalBarChart1 = document.getElementById("horizontalBar1")
					.getContext('2d');

	var myPieChart = loadPopulationData(dataOfPieChart);
	var myDoughnutChart = loadDiseaseData(dataOfDoughnutChart);
	var myHorizontalBarChart = loadInsuranceData(dataOfHorizontalBarChart);
	
	var myPieChart1 = loadPopulationData1(dataOfPieChart);
	var myDoughnutChart1 = loadDiseaseData1(dataOfDoughnutChart);
	var myHorizontalBarChart1 = loadInsuranceData1(dataOfHorizontalBarChart);

	var svgImageElement = document.getElementById("svgObject");
	svgImageElement.addEventListener("load", function() {
		var svgDoc = svgImageElement.contentDocument;
		var pathList = svgDoc.getElementsByTagName("path");
		for (i = 0; i < pathList.length; i++) {
			pathList[i].addEventListener('click', function() {
				stateName = this.getAttribute('title');
				fetchDataForThisState(stateName);
			});
			pathList[i].addEventListener('mouseenter', function() {
				this.setAttribute('style', 'fill:blue');
			});
			pathList[i].addEventListener('mouseleave', function() {
				this.removeAttribute('style');
			});
		}
	});
});

function fetchDataForThisState(stateName) {
	var stateId = fetchStateCode(stateName);
	dataOfPieChart = fetchPopulationData(stateId);
	dataOfDoughnutChart = fetchDiseaseData(stateId);
	dataOfHorizontalBarChart = fetchInsuranceData(stateId);

	myPieChart = loadPopulationData(dataOfPieChart);
	myDoughnutChart = loadDiseaseData(dataOfDoughnutChart);
	myHorizontalBarChart = loadInsuranceData(dataOfHorizontalBarChart);

	myPieChart1 = loadPopulationData1(dataOfPieChart);
	myDoughnutChart1 = loadDiseaseData1(dataOfDoughnutChart);
	myHorizontalBarChart1 = loadInsuranceData1(dataOfHorizontalBarChart);
}

function fetchStateCode(stateName) {
	return '101';
}

function fetchPopulationData(StateCode) {
	return [100, 60];
}

function fetchDiseaseData(StateCode) {
	return [ 40, 30, 20, 10 ];
}

function fetchInsuranceData(StateCode) {
	return [ 100, 50, 50 ];
}

function loadPopulationData(dataOfPieChart){
	if(dataOfPieChart[1] == 100){
		return new Chart(pieChart,
			{
				type : 'pie',
				data : {
					labels : [ "Total Population "+stateName],
					datasets : [ {
						data : [100],
						backgroundColor : [ 'rgba(54, 162, 235, 1)' ],
						borderColor : [ 'rgba(54, 162, 235, 1)' ],
						borderWidth : 2
					} ]
				},
				options : {
					responsive : true
				}
			});
	}else{
		return new Chart(pieChart,
			{
				type : 'pie',
				data : {
					labels : [ "Total Population", "Population in "+stateName ],
					datasets : [ {
						label : 'Population Status of ' + stateName,
						data : dataOfPieChart,
						backgroundColor : [ 'rgba(255, 99, 132, 1)',
								'rgba(54, 162, 235, 1)' ],
						borderColor : [ 'rgba(255,99,132,1)',
								'rgba(54, 162, 235, 1)' ],
						borderWidth : 2
					} ]
				},
				options : {
					responsive : true
				}
			});
	}
	
}

function loadDiseaseData(dataOfDoughnutChart){
	return new Chart(doughnutChart,
			{
				type : 'doughnut',
				data : {
					labels : [ "Cancer", "Tuberculosis", "HIV", "Diabetes" ],
					datasets : [ {
						data : dataOfDoughnutChart,
						backgroundColor : [ "#F7464A", "#46BFBD", "#FDB45C",
								"#949FB1" ],
						hoverBackgroundColor : [ "#FF5A5E", "#5AD3D1",
								"#FFC870", "#A8B3C5" ]
					} ]
				},
				options : {
					responsive : true
				}
			});
}

function loadInsuranceData(dataOfHorizontalBarChart){
	return new Chart(horizontalBarChart, {
		"type" : "horizontalBar",
		"data" : {
			"labels" : [ "Total Population", "Insured", "Insurance Claimed" ],
			"datasets" : [ {
				"label" : "Insurance Status of " + stateName,
				"data" : dataOfHorizontalBarChart,
				"fill" : true,
				"backgroundColor" : [ "rgba(255, 99, 132, 1)",
						"rgba(255, 159, 64, 1)", "rgba(255, 205, 86, 1)" ],
				"borderColor" : [ "rgb(255, 99, 132)", "rgb(255, 159, 64)",
						"rgb(255, 205, 86)" ],
				"borderWidth" : 2
			} ]
		},
		"options" : {
			"scales" : {
				"xAxes" : [ {
					"ticks" : {
						"beginAtZero" : true
					}
				} ]
			}
		}
	});
}

function loadPopulationData1(dataOfPieChart){
	if(dataOfPieChart[1] == 100){
		return new Chart(pieChart1,
			{
				type : 'pie',
				data : {
					labels : [ "Total Population"],
					datasets : [ {
						data : [100],
						backgroundColor : [ 'rgba(54, 162, 235, 1)' ],
						borderColor : [ 'rgba(54, 162, 235, 1)' ],
						borderWidth : 2
					} ]
				},
				options : {
					responsive : true
				}
			});
	}else{
		return new Chart(pieChart1,
			{
				type : 'pie',
				data : {
					labels : [ "Total Population", "Population in State" ],
					datasets : [ {
						label : 'Population Status of ' + stateName,
						data : dataOfPieChart,
						backgroundColor : [ 'rgba(255, 99, 132, 1)',
								'rgba(54, 162, 235, 1)' ],
						borderColor : [ 'rgba(255,99,132,1)',
								'rgba(54, 162, 235, 1)' ],
						borderWidth : 2
					} ]
				},
				options : {
					responsive : true
				}
			});
	}
	
}

function loadDiseaseData1(dataOfDoughnutChart){
	return new Chart(doughnutChart1,
			{
				type : 'doughnut',
				data : {
					labels : [ "Cancer", "Tuberculosis", "HIV", "Diabetes" ],
					datasets : [ {
						data : dataOfDoughnutChart,
						backgroundColor : [ "#F7464A", "#46BFBD", "#FDB45C",
								"#949FB1" ],
						hoverBackgroundColor : [ "#FF5A5E", "#5AD3D1",
								"#FFC870", "#A8B3C5" ]
					} ]
				},
				options : {
					responsive : true
				}
			});
}

function loadInsuranceData1(dataOfHorizontalBarChart){
	return new Chart(horizontalBarChart1, {
		"type" : "horizontalBar",
		"data" : {
			"labels" : [ "Total Population", "Insured", "Insurance Claimed" ],
			"datasets" : [ {
				"label" : "Insurance Status of " + stateName,
				"data" : dataOfHorizontalBarChart,
				"fill" : true,
				"backgroundColor" : [ "rgba(255, 99, 132, 1)",
						"rgba(255, 159, 64, 1)", "rgba(255, 205, 86, 1)" ],
				"borderColor" : [ "rgb(255, 99, 132)", "rgb(255, 159, 64)",
						"rgb(255, 205, 86)" ],
				"borderWidth" : 2
			} ]
		},
		"options" : {
			"scales" : {
				"xAxes" : [ {
					"ticks" : {
						"beginAtZero" : true
					}
				} ]
			}
		}
	});
}