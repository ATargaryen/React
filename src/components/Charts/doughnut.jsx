import {Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


function DoughnutChart() {

    const data = {

        labels: [
            'Mon',
            'Tue',
            'Wed',
            'Thurs',
            'Fri'],

        datasets: [
            {
                label: 'Attendance for Week 1',
                data: [20,20,20,20,20],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                'rgba(232,211,6,1)',
                'rgba(54,162,235,1)',
                'rgba(255,159,64,1)',
                'rgba(153,102,255,1)' ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
    
        ]
    }

    const options = {
        legend: {
          display: true,
          position: "center"
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      };
      

    
    return (
      <div>
          <Doughnut data={data} options={options} />
      </div>
    )
}

export default DoughnutChart