
var app = angular.module("gizApp", ["apexcharts"])

    .controller("MainCtrl", function ($scope) {

        $scope.line = {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            title: {
                text: 'Product Trends by Month',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        };


        $scope.circle = {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            series: [44, 55, 13, 43, 22],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        $scope.updateData = function () {
            $scope.line.xaxis.categories.push('AAA');
            $scope.line.series[0].data.push(Math.floor((Math.random() * 100) + 1));
        }

        $scope.updateData2 = function () {
            $scope.circle.labels.push('AAA');
            $scope.circle.series.push(Math.floor((Math.random() * 100) + 1));
        }

    })