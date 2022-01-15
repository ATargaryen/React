import {Line } from 'react-chartjs-2';

function LineChart() {

    const data = {

        labels: [
            'Jan',
            'Feb',
            'March',
            'April'],

        datasets: [
            {
                label: 'Month Purchase',
                data: [40,20,15,20],
                fill: false,
    borderColor: 'Black',
    tension: 0.1
            }
    
        ]
    }

    const options = {
        legend: {
          display: true,
          position: "left"
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      };
      

    
    return (
      <div>
          <Line data={data} options={options} />
      </div>
    )
}

export default LineChart