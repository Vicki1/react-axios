import axios from 'axios';
import {getList} from '../ducks/listReducer';
import store from  '../store.js';
import apiURL from '../api.js';

export function dispatchGetList(){
    console.log(apiURL);
    const promise= axios.get(apiURL).then(response=>response.data);
    store.dispatch(getList(promise));
}