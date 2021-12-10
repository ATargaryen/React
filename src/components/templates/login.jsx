import { Stack } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default function Login(){
    return ( <div>
<Stack gap={3} className="col-md-5 mx-auto p-5">
    <h2 className="text-center"> STORE LOGIN </h2>
  <label for="email">Email</label>
  <input type="email" class="form-control" placeholder="Enter Your Email" name="username"></input>
  <label for="password">Password</label>
  <input type="password" class="form-control" placeholder="Password" name="username"></input>
  <Button variant="success">Login</Button>
  <Button variant="outline-secondary">Forgot Password</Button>
</Stack>
    </div> );
  }