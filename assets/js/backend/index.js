var params = ['jquery', 'bootstrap','hplus','contabs','content','pace','easypiechart','gritter','flot','tooltip','spline','resize','pie','peity','sparkline'];
define(params, function ($, undefined,Hplus,Contabs,Content) {
    var Controller = {
    	// 主页面
    	index:function(){

    	},
    	// 主页示例一
    	index_v1:function(){

    	},
    	// 主页示例二
    	index_v2:function(){
    		 $(document).ready(function () {
	            Content.WinMove();
	            setTimeout(function () {
	                $.gritter.add({
	                    title: '您有2条未读信息',
	                    text: '请前往<a href="mailbox.html" class="text-warning">收件箱</a>查看今日任务',
	                    time: 10000
	                });
	            }, 2000);


	            $('.chart').easyPieChart({
	                barColor: '#f8ac59',
	                //                scaleColor: false,
	                scaleLength: 5,
	                lineWidth: 4,
	                size: 80
	            });

	            $('.chart2').easyPieChart({
	                barColor: '#1c84c6',
	                //                scaleColor: false,
	                scaleLength: 5,
	                lineWidth: 4,
	                size: 80
	            });

	            var data1 = [
	                [0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 30], [11, 10], [12, 13], [13, 4], [14, 3], [15, 3], [16, 6]
	            ];
	            var data2 = [
	                [0, 1], [1, 0], [2, 2], [3, 0], [4, 1], [5, 3], [6, 1], [7, 5], [8, 2], [9, 3], [10, 2], [11, 1], [12, 0], [13, 2], [14, 8], [15, 0], [16, 0]
	            ];
	            $("#flot-dashboard-chart").length && $.plot($("#flot-dashboard-chart"), [
	                data1, data2
	            ], {
	                series: {
	                    lines: {
	                        show: false,
	                        fill: true
	                    },
	                    splines: {
	                        show: true,
	                        tension: 0.4,
	                        lineWidth: 1,
	                        fill: 0.4
	                    },
	                    points: {
	                        radius: 0,
	                        show: true
	                    },
	                    shadowSize: 2
	                },
	                grid: {
	                    hoverable: true,
	                    clickable: true,
	                    tickColor: "#d5d5d5",
	                    borderWidth: 1,
	                    color: '#d5d5d5'
	                },
	                colors: ["#1ab394", "#464f88"],
	                xaxis: {},
	                yaxis: {
	                    ticks: 4
	                },
	                tooltip: false
	            });
	        });
    		$(function() {
			    $("span.pie").peity("pie", {
			        fill: ['#1ab394', '#d7d7d7', '#ffffff']
			    })

			    $(".line").peity("line",{
			        fill: '#1ab394',
			        stroke:'#169c81',
			    })

			    $(".bar").peity("bar", {
			        fill: ["#1ab394", "#d7d7d7"]
			    })

			    $(".bar_dashboard").peity("bar", {
			        fill: ["#1ab394", "#d7d7d7"],
			        width:100
			    })

			    var updatingChart = $(".updating-chart").peity("line", { fill: '#1ab394',stroke:'#169c81', width: 64 })

			    setInterval(function() {
			        var random = Math.round(Math.random() * 10)
			        var values = updatingChart.text().split(",")
			        values.shift()
			        values.push(random)

			        updatingChart
			            .text(values.join(","))
			            .change()
			    }, 1000);

			    $("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 44, 52, 25], {
			        type: 'line',
			        lineColor: '#17997f',
			        fillColor: '#1ab394',
			    });
			    $("#sparkline2").sparkline([5, 6, 7, 2, 0, -4, -2, 4], {
			        type: 'bar',
			        barColor: '#1ab394',
			        negBarColor: '#c6c6c6'});

			    $("#sparkline3").sparkline([1, 1, 2], {
			        type: 'pie',
			        sliceColors: ['#1ab394', '#b3b3b3', '#e4f0fb']});

			    $("#sparkline4").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
			        type: 'line',
			        lineColor: '#17997f',
			        fillColor: '#ffffff',
			    });

			    $("#sparkline5").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
			        type: 'tristate',
			        posBarColor: '#1ab394',
			        negBarColor: '#bfbfbf'});


			    $("#sparkline6").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, ], {
			        type: 'discrete',
			        lineColor: '#1ab394'});

			    $("#sparkline7").sparkline([52, 12, 44], {
			        type: 'pie',
			        height: '150px',
			        sliceColors: ['#1ab394', '#b3b3b3', '#e4f0fb']});

			    $("#sparkline8").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7], {
			        type: 'bar',
			        barWidth: 8,
			        height: '150px',
			        barColor: '#1ab394',
			        negBarColor: '#c6c6c6'});

			    $("#sparkline9").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
			        type: 'line',
			        lineWidth: 1,
			        height: '150px',
			        lineColor: '#17997f',
			        fillColor: '#ffffff',
			    });

			});
    	}
    }
    return Controller;
});