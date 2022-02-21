import './App.css';
import Navbar from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/About';
import NewExperienceForm from './components/NewExperienceForm';
import Catalogo from "./components/pages/Catalogo";
import Signup from './components/pages/Signup.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <div className="App">

            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/experiences' component={Catalogo} />
                    <Route path='/new' component={NewExperienceForm} />
                    <Route path='/sign-up' component={Signup} />
                </Switch>
            </Router>
            <Footer/>


        </div>


    );

}

export default App;