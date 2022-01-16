
import { useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { auth } from "./firebase"
import { useStateValue } from './StateProvider';


function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    //runs only when the app component loads(once)
    auth.onAuthStateChanged(authUser => {
      
      console.log('the user id >>>>', authUser)
      
      if(authUser){
        //the user just logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        //the usesr is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  },[])
  return (
    //BEM
    <Router>
      <div className="app">
        
     <Switch>
       <Route path='/login'>
         <Login/>
       </Route>
     <Route path="/checkout">
       <Header/>
          <Checkout />         
       </Route>
       <Route path="/">
         <Header/>
          <Home />
       </Route>
      
     </Switch>
     
    
    </div>
    </Router>
    
  );
}

export default App;
