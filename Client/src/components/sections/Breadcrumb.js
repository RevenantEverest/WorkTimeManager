import '../css/Breadcrumb.css';
import { Link } from 'react-router-dom';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';

function Breadcrumb(props) {

    let Routes = props.routes.map((el, idx) => {
        return(
            <MDBBreadcrumbItem key={idx} active={el.isActive}>
            <Link 
            className={el.isActive ? "active-link" : ""} 
            to={el.path}>
                {el.name}
            </Link>
            </MDBBreadcrumbItem>
        );
    });

    return(
        <div className="Breadcrumb mt-4">
        <MDBBreadcrumb>
            {Routes}
        </MDBBreadcrumb>
        </div>
    );
};

export default Breadcrumb;