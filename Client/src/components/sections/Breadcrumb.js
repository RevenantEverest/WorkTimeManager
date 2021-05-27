import '../css/Breadcrumb.css';
import { Link } from 'react-router-dom';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';

function Breadcrumb(props) {

    let Routes = props.routes.map((el, idx) => {
        return(
            <MDBBreadcrumbItem key={idx} active={el.isActive}>
            {el.isActive ? <Link to={el.path}>{el.name}</Link> : el.name}
            </MDBBreadcrumbItem>
        );
    });

    return(
        <div className="Breadcrumb">
        <MDBBreadcrumb>
            {Routes}
        </MDBBreadcrumb>
        </div>
    );
};

export default Breadcrumb;