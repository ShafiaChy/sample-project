import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './About/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Home/Home';
import PrivateOne from './PrivateOne/PrivateOne';
import PrivateTwo from './PrivateTwo/PrivateTwo';
import Login from './Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Services from './Services/Services';
import Details from './Details/Details';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route> 
        <Route exact path="/home">
          <Home></Home>
        </Route>
       <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
      <PrivateRoute exact path="/details/:id">
        <Details></Details>
        </PrivateRoute> 
        <PrivateRoute exact path="/private-one">
          <PrivateOne></PrivateOne>
          </PrivateRoute> 
        <PrivateRoute exact path="/private-two"> 
          <PrivateTwo></PrivateTwo>
          </PrivateRoute>
         <Route exact path="/login">
         <Login></Login>
        </Route>
        <Route exact path="/register">
         <Register></Register>
        </Route>
        {/* <Route path="/*">
          <NotFound></NotFound>
        </Route>  */}
      </Switch>
    </Router> 
    </AuthProvider>
    </div>
  );
}

export default App;
