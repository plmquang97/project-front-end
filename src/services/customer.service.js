import httpClient from "../http-common";

const getAll = () =>{
    return httpClient.get('/customer');
}

const create = (data) =>{
    return httpClient.post('/customer' , data);
}

const get = (id )=>{
    return httpClient.get(`/customer/${id}`);
}

const update = (id, data) => {
    return httpClient.put(`/customer/${id}`,data);
}

const remove = (id )=> {
    return httpClient.delete(`/customer/${id}`)
}

const customerService = { getAll , create , get , update , remove};
export default customerService ;
