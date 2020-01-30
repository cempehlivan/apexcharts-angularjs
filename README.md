# apexcharts-angularjs


# Online Demo
[Demo](https://cempehlivan.github.io/apexcharts-angularjs/example/index.html)

Charts are updated live with two-way binding.


Step1: Include the library in your page

    <script type="text/javascript" src="../dist/apexcharts.angularjs.min.js"></script>

Step2: Include the module in javascript

    var app = angular.module("exampleApp", ["apexcharts"])


Step3: Create your chart settings in controller

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
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        };


Final Step: html

    <apexcharts options="line"></apexcharts>
    
    <!-- or -->

    <div apexcharts options="line"></div>
