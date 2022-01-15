import React from 'react';
import { Row, Col } from 'react-bootstrap';

import  DoughnutChart from '../Charts/doughnut';
import BarChart from   '../Charts/bar';
import PieChart from '../Charts/pie';
import LineChart from '../Charts/Line';


export default function Analytics(props) {

  return (<div>
 
        <div className='container-fluid'>


        <Row>
            <Col sm={4}>
            <BarChart></BarChart>
            </Col>
            <Col sm={4}>
             <DoughnutChart></DoughnutChart>
            </Col>
            <Col sm={4}>
             <PieChart></PieChart>
            </Col>
        </Row>

        <Row>

            <Col sm={4} >
            <LineChart></LineChart>
            </Col>
        </Row>


   

        </div>
     
  </div>);
}

