import './App.css';
import Navbar from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/about';
import Experiences from './components/pages/experiences';
import SignUp from './components/pages/signup.js';


function App() {

    return (
        <div className="App">

            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/experiences' component={Experiences} />
                    <Route path='/sign-up' component={SignUp} />
                </Switch>
            </Router>


        </div>


    );

}

export default App;
