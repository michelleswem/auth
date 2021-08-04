import { Redirect, Route, Switch } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Signin from "./pages/SignIn";
import DashBoard from './pages/DashBoard';
import { useContext } from 'react';
import AuthContext from './store/auth-context';
import PageNotFound from './pages/PageNotFound';
import People from './pages/People';
import Species from './pages/Species';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';




function App() {
 const authCtx =  useContext(AuthContext);
 const isLoggedIn = authCtx.isLoggedIn
  return (
  
    <Layout>
    <Switch>
      {!isLoggedIn && <Route path='/' exact>
        <Signin />
      </Route>}
     <Route path = '/dashboard'>
     {isLoggedIn && <DashBoard/>}
     {!isLoggedIn && <Redirect to = '/'/>}
      </Route>
      <Route path = '/people'>
       {isLoggedIn && <People/>}
       {!isLoggedIn && <Redirect to = '/'/>}
      </Route>
      <Route path = '/species'>
       {isLoggedIn && <Species/>}
       {!isLoggedIn && <Redirect to = '/'/>}
      </Route>
      <Route path = '/starships'>
       {isLoggedIn && <Starships/>}
       {!isLoggedIn && <Redirect to = '/'/>}
      </Route>
      <Route path = '/vehicles'>
       {isLoggedIn && <Vehicles/>}
       {!isLoggedIn && <Redirect to = '/'/>}
      </Route>
      <Route path = '*'>
      <PageNotFound/>
      </Route>
    </Switch>
    </Layout>
    
  
  );
}

export default App;
