import httpClient from "../http-common";

const getAll = () =>{
    return httpClient.get('/movie');
}

const create = (data) =>{
    return httpClient.post('/movie' , data);
}

const get = (id )=>{
    return httpClient.get(`/movie/${id}`);
}

const update = (id, data) => {
    return httpClient.put(`/movie/${id}`,data);
}

const remove = (id )=> {
    return httpClient.delete(`/movie/${id}`)
}

const movieService = { getAll , create , get , update , remove};
export default movieService ;
