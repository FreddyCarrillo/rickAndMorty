import AppService from './AppService';

class RickAndMortyService extends AppService {

    constructor() {
        super();
        this.path = '';
    }
    characters(filter,page) {

        if(filter === 'female' || filter === 'male' || filter === 'genderless'){
            return this.http.get(`/character/?gender=${filter}&page=${page}`);
        } else if (filter === 'alive' || filter === 'dead' || filter === 'unknown'){
            return this.http.get(`/character/?status=${filter}&page=${page}`);
        }else{
            return this.http.get(`/character/?page=${page}`);
        }
        
    }
    search(name){
        return this.http.get(`/character/?name=${name}`);
    }
    episodes(url) {
        return this.http.get(url);
    }
}

export default RickAndMortyService;
