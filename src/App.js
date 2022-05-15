import About from './Components/About';
import Banner from './Components/Banner';
import EditProfile from './Components/EditProfile';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Latestproduct from './Components/Latest_product';
import Login from './Components/Login';
import Products from './Components/Products';
import Search from './Components/Search';
import Slider from './Components/Slider';
import Smallbanner from './Components/Small_banner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div>
    <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={Home } />
        <Route exact path="/banner" component={Banner  } />
        <Route exact path="/about" component={About  } />
        <Route exact path="/slider" component={Slider  } />
        <Route exact path="/Products" component={Products  } />
        <Route exact path="/smallbanner" component={Smallbanner  } />
        <Route exact path="/latestproduct" component={Latestproduct  } />
        <Route exact path="/editprofile" component={EditProfile } />
        <Route exact path="/login" component={Login } />
        <Route exact path="/signup" component={SignUp } />
        <Route exact path="/search" component={Search } />
      </Switch>
    <Footer />
    </Router>
    
    </div>
  );
}

export default App;
