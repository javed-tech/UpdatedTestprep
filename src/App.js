import './App.css';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Filtration from './nichecomponents/Filtration';
import BodyPart from './Targetcomponents/BodyPart';
import { Redirect, Route, Switch } from 'react-router-dom';
import CollegeListing from './Targetcomponents/CollegeListing';
import Home from './Homepage/Home';
import InstitutionHome from './Homepage/InstitutionHome'
function App() {
  return (
    <div className="App ">
      <Switch>
        <Route exact path="/" component={Filtration}/>
        <Route path="/BodyPart" component={BodyPart}/>
        <Route path="/Home" component={Home}/>
        <Route path="/CollegeListing" component={CollegeListing}/>
        <Route path="/InstitutionHome" component={InstitutionHome}/>
        <Redirect to="/" />
      </Switch>

       </div>
  );
}

export default App;
