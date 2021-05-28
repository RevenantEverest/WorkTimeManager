import axios from 'axios';
import env from './env';
const services = {};

services.index = () => {
    return axios({
        method: "GET",
        url: `${env.API}/billing_periods`
    });
};

services.getOne = (id) => {
    return axios({
        method: "GET",
        url: `${env.API}/billing_periods/id/${id}`
    });
};

services.getByUserId = (project_id) => {
    return axios({
        method: "GET",
        url: `${env.API}/billing_periods/project/id/${project_id}`
    });
};

services.save = (billing_period) => {
    return axios({
        method: "POST",
        url: `${env.API}/billing_periods`,
        data: {
            project_id: billing_period.project_id,
            start_date: billing_period.start_date
        }
    });
};

services.update = (billing_period) => {
    return axios({
        method: "PUT",
        url: `${env.API}/billing_periods`,
        data: {
            id: billing_period.id,
            project_id: billing_period.project_id,
            start_date: billing_period.start_date,
            end_date: billing_period.end_date
        }
    });
};

services.delete = (id) => {
    return axios({
        method: "DELETE",
        url: `${env.API}/billing_periods/id/${id}`
    });
};


export default services;