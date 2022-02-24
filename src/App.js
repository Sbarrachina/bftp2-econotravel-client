import './App.css';
import Navbar from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NewExperienceForm from './components/NewExperienceForm';
import Catalogo from "./components/pages/Catalogo";
import Signup from './components/pages/Signup.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import {useEffect, useState} from "react";
import Experience from "./components/Individuales/Experience";



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
                    <Route path='/' exact  >
                        <Home experiences={experiences} />
                    </Route>
                    <Route path='/experiences'>
                        <Catalogo experiences={experiences} />
                    </Route>
                    <Route path='/experience/:id' component={Experience} />
                    <Route path='/new' component={NewExperienceForm} />
                    <Route path='/sign-up' component={Signup} />

                </Switch>
            </Router>
            <Footer/>


        </div>


    );

}

export default App;