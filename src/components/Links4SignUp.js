import { Link, Switch, Route } from "react-router-dom";
import '../Nav.css';

const Links4SignUp = () => {

    return ( 
        <div className='link4gmail'>
        <ul>
          <Link to="/register">
            <h6> Please register your Gmail here!</h6>
          </Link>
          <Switch>
          <Route path="https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fe-11-1eb5b83a6df457422ce3daf2f1870-2dbc1dda3cfb2dc1648d8798011a4fe26921ce94&flowName=GlifWebSignIn&flowEntry=SignUp"/>
          </Switch>
          <Link to="https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fe-11-1eb5b83a6df457422ce3daf2f1870-2dbc1dda3cfb2dc1648d8798011a4fe26921ce94&flowName=GlifWebSignIn&flowEntry=SignUp">
            {/* <h6>Don't have a Gmail account?</h6> */}
          </Link>
        </ul>
      </div>
     );
}
 
export default Links4SignUp;