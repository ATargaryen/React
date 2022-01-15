import {Bar } from 'react-chartjs-2';
import {Chart, registerables } from 'chart.js'
Chart.register(...registerables)

// Chart.js 3 is tree-shakeable, so it is necessary to import and register the controllers, elements, scales and plugins you are going to use.
// do in one line import Chart from 'chart.js/auto';



function BarChart() {

    const data = {
        labels: ["Gnoida", "Mumbai", "Kolkata", "Delhi"],
        datasets: [
            {
              label: "Total Meter Quantity",
              // Data or value of your each variable
              data: [1552, 1319, 613, 1400],
              // Color of each bar
              backgroundColor: ["aqua", "green", "red", "yellow"],
              // Border color of each bar
              borderColor: ["Black", "Black", "Black", "Black"],
              borderWidth: 2.5,
            },
          ],
        }

        const options = {
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }

              

    return (
      <div>
          <Bar data={ data } height={400} options={options} ></Bar>
      </div>
    )
}

export default BarChart 