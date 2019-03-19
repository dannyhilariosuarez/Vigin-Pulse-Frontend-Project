module.exports = {
  homeCtrl: function() {
  let controller = {};

    controller.randomInt = randomInt;
    controller.getChart = getChart();

    return controller;

    function randomInt(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min))
    }

    function getChart() {
      let steps = [];

      steps.push(randomInt(1000, 20000));
      steps.push(randomInt(1000, 20000));
      steps.push(randomInt(1000, 20000));
      steps.push(randomInt(1000, 20000));
      steps.push(randomInt(1000, 20000));
      steps.push(randomInt(1000, 20000));
      steps.push(randomInt(1000, 20000));

      let ctx = document.getElementById('myChart').getContext("2d");
      let data = {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: "# of Steps",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: steps,
            spanGaps: false,
          }
        ]
      };

      var options = {
        responsive: true,
        title: {
          display: true,
          position: "top",
          text: '',
          fontSize: 18,
          fontColor: "#111"
        },
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: function (tooltipItems, data) {
              var multistringText = [tooltipItems.yLabel];
              multistringText.push('Last week value: ');
              multistringText.push(randomInt(1000, 20000));
              return multistringText;
            }
          }
        },
        legend: {
          display: true,
          position: "top",
          labels: {
            fontColor: "#333",
            fontSize: 16
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 0

            }
          }]

        }
      };
      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      });
    }

  
}
}

