import axios from 'axios';
import env from './env';
const services = {};

services.index = () => {
    return axios({
        method: "GET",
        url: `${env.API}/projects`
    });
};

services.getOne = (id) => {
    return axios({
        method: "GET",
        url: `${env.API}/projects/id/${id}`
    });
};

services.getByUserId = (user_id) => {
    return axios({
        method: "GET",
        url: `${env.API}/projects/user/id/${user_id}`
    });
};

services.save = (project) => {
    return axios({
        method: "POST",
        url: `${env.API}/projects`,
        data: {
            user_id: project.user_id,
            name: project.name,
            description: project.description
        }
    });
};

services.update = (project) => {
    return axios({
        method: "PUT",
        url: `${env.API}/projects`,
        data: {
            id: project.id,
            user_id: project.user_id,
            name: project.name,
            description: project.description,
            image_url: project.image_url
        }
    });
};

services.delete = (id) => {
    return axios({
        method: "DELETE",
        url: `${env.API}/projects/id/${id}`
    });
};


export default services;