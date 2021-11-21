
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import ExploreApartments from './Pages/HomePage/ExploreApartments/ExploreApartments';
import About from './Pages/HomePage/About/About';
import Login from './Pages/LoginPage/Login/Login';
import Register from './Pages/LoginPage/Register/Register';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/LoginPage/PrivateRoute/PrivateRoute';
import AddedProducts from './Pages/AddedProducts/AddedProducts';
function App() {
  
  return (
    <div className="App">
      <AuthProvider>
      <Router>
       
       <Switch>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/apartments">
           <ExploreApartments></ExploreApartments>
         </Route>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/home">
           <Home />
         </Route>
         <Route path="/login">
           <Login></Login>
            </Route>
            <Route path='/register'>
            <Register></Register>
          </Route>
            <PrivateRoute path='/placeorder/:apartmentId'>
            <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/addedApartment'>
            <AddedProducts></AddedProducts>
            </PrivateRoute>
       </Switch>
     
   </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
