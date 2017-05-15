angular.module('app', ['chart.js'])
  .config(['ChartJsProvider', function (ChartJsProvider) {
    'use strict';
    ChartJsProvider.setOptions({
      tooltips: { enabled: false }
    });
  }])
  .controller('RadarCtrl', ['$scope', function ($scope) {

    $scope.labels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    $scope.options = { legend: { display: false } };

    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    
  }])
  .controller('BubbleCtrl', ['$scope', '$interval', function ($scope, $interval) {
    'use strict';

    $scope.options = {
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            max: 125,
            min: -125,
            stepSize: 10
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            max: 125,
            min: -125,
            stepSize: 10
          }
        }]
      }
    };

    createChart();
    $interval(createChart, 2000);

    function createChart () {
      $scope.series = [];
      $scope.data = [];
      for (var i = 0; i < 50; i++) {
        $scope.series.push(`Series ${i}`);
        $scope.data.push([{
          x: randomScalingFactor(),
          y: randomScalingFactor(),
          r: randomRadius()
        }]);
      }
    }

    function randomScalingFactor () {
      return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    }

    function randomRadius () {
      return Math.abs(randomScalingFactor()) / 4;
    }
  }]); //end conttroller
