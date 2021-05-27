import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Pages */
import HomePage from './components/pages/HomePage';

function App() {
    return(
        <div>
        {/* <Router>
            <div>
            <Route exact path="/" component={HomePage} />
            </div>
        </Router> */}
        <HomePage />
        </div>
    );
};

export default App;