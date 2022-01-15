import {Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


function PieChart() {

    const data = {

        labels: [
            'GNoida',
            'Delhi',
            'Mumbai',
            'Banglore'],

        datasets: [
            {
                label: 'Warehouse Item Distribution',
                data: [40,20,15,20],
                borderColor: ['Black'],
                backgroundColor: ['rgba(232,99,132,1)',
                'rgba(232,211,6,1)',
                'rgba(54,162,235,1)',
                'rgba(255,159,64,1)',
               ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
    
        ]
    }

    const options = {
        legend: {
          display: true,
          position: "right"
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        },
      };
      

    
    return (
      <div>
          <Pie data={data} options={options} />
      </div>
    )
}

export default PieChart