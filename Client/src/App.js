import { BrowserRouter as Router, Route } from 'react-router-dom';

import SideNav from './components/navigation/SideNav';

function App() {
    return(
        <div>
        <Router>
            <div>
            <SideNav />
            </div> 
        </Router>
        </div>
    );
};

export default App;