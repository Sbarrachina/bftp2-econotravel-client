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
import {useEffect, useState} from "react";



function App() {

    const [experiences, setExperiences] = useState([]);
    const [requiresUpdate, setRequiresUpdate] = useState(true);

    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    return (
        <div className="App">

            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/experiences'>
                        <Catalogo experiences={experiences} />
                    </Route>
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