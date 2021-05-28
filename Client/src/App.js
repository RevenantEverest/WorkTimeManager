import { BrowserRouter as Router } from 'react-router-dom';

/* Font Awesome Imports */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHistory, faHourglassStart, faTachometerAlt, faTasks } from '@fortawesome/free-solid-svg-icons';

/* Page Imports */
import SideNav from './components/navigation/SideNav';

library.add(fab);
library.add(faTachometerAlt, faHourglassStart, faTasks, faHistory);

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