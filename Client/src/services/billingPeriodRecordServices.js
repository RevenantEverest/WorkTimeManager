import axios from 'axios';
import env from './env';
const services = {};

services.index = () => {
    return axios({
        method: "GET",
        url: `${env.API}/billing_period_record_records`
    });
};

services.getOne = (id) => {
    return axios({
        method: "GET",
        url: `${env.API}/billing_period_record_records/id/${id}`
    });
};

services.getByUserId = (billing_period_id) => {
    return axios({
        method: "GET",
        url: `${env.API}/billing_period_record_records/billing_period/id/${billing_period_id}`
    });
};

services.save = (billing_period_record) => {
    return axios({
        method: "POST",
        url: `${env.API}/billing_period_record_records`,
        data: {
            billing_period_id: billing_period_record.billing_period_id,
            time_start: billing_period_record.time_start,
            time_end: billing_period_record.time_end
        }
    });
};

services.update = (billing_period_record) => {
    return axios({
        method: "PUT",
        url: `${env.API}/billing_period_record_records`,
        data: {
            id: billing_period_record.id,
            billing_period_id: billing_period_record.billing_period_id,
            title: billing_period_record.title,
            description: billing_period_record.description,
            time_start: billing_period_record.time_start,
            time_end: billing_period_record.time_end
        }
    });
};

services.delete = (id) => {
    return axios({
        method: "DELETE",
        url: `${env.API}/billing_period_record_records/id/${id}`
    });
};


export default services;