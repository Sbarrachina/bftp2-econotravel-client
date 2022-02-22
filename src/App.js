import './App.css';
import Navbar from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages';
import NewExperienceForm from './components/NewExperienceForm';
import Catalogo from "./components/pages/Catalogo";
import Signup from './components/pages/Signup.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Barco from "./components/Individuales/Barco";
import Barcelona from "./components/Individuales/Barcelona";
import Montserrat from "./components/Individuales/Montserrat";
import Huerto from "./components/Individuales/Huerto";
import PaseoBici from "./components/Individuales/PaseoBici";



function App() {

    return (
        <div className="App">

            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/experiences' component={Catalogo} />
                    <Route path='/new' component={NewExperienceForm} />
                    <Route path='/sign-up' component={Signup} />
                    <Route path='/barco' component={Barco} />
                    <Route path='/bici' component={PaseoBici} />
                    <Route path='/montserrat' component={Montserrat} />
                    <Route path='/huerto' component={Huerto} />
                    <Route path='/barcelona' component={Barcelona} />
                </Switch>
            </Router>
            <Footer/>


        </div>


    );

}

export default App;