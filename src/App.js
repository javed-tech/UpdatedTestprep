import './App.css';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import BlogListing from './Targetcomponents/BlogListing';
import BlogPage from './Targetcomponents/BlogPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import CollegeListing from './nichecomponents/CollegeListing';
import Home from './Homepage/Home';
import InstitutionHome from './Homepage/InstitutionHome'
import Dummy from './Dummy';
// import Postdata from './Postdata';
function App() {
  return (
    <div className="App ">
      <Switch>
        <Route exact path="/" component={CollegeListing}/>
        <Route path="/BlogPage" component={BlogPage}/>
        <Route path="/Home" component={Home}/>
        <Route path="/BlogListing" component={BlogListing}/>
        <Route path="/InstitutionHome" component={InstitutionHome}/>
        <Route  path="/Dummy" component={Dummy}/>
        <Redirect to="/" />
      </Switch>
      {/* <Postdata/> */}
       </div>
  );
}

export default App;
