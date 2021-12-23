import React, { Form , useEffect , useState} from 'react';
import { Stack  } from 'react-bootstrap';
import { Button, Table } from 'react-bootstrap';


export default function Orders() {

    const data = {user_id : process.env.REACT_APP_USER_ID  };

    const [orders , setOrders] = useState([]);

    let header = {
        method : 'POST',
        mode: 'cors', 
        body: JSON.stringify(data)
    }


    useEffect(() => {
        fetch("http://127.0.0.1:8000/getUserOrders", header)
          .then(res => res.json())
          .then(
            (result) => {
              processOrders(result)
            },
            (error) => {
              console.log(error.message)
            }  
          )
    }, [])

    function processOrders(orders){
        const orders_array = [];

        for(var i=0 ; i < orders.length ; i++){
  
          const order = {
            id: orders[i].id,
            job_order: orders[i].job_order,
            order_amount: orders[i].order_amount,
            person_name: orders[i].person_name,
            order_status: orders[i].order_status,
          }
  
          orders_array.push(order)
        }
  
        setOrders(orders_array) 
        
        console.log(orders_array);
    }

      
    return (<div>
        <div className="m-4">
            <h2 className="m-4">This is Order Page</h2>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Job Order</th>
                        <th>Site Person</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {  
                    orders.map(function(order, i){ 
                              return (<> 
                                       <tr>
                        <td>{order.id}</td>
                        <td>{order.job_order}</td>
                        <td>{order.person_name   }</td>
                        <td>{order.order_amount   }</td>
                        <td>{order.order_status   }</td>
                    </tr>
                                    </>)  
                    }) 
                  }
                </tbody>
            </Table>
        </div>

    </div>);
}