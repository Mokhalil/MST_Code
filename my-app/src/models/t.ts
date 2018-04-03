import axios from 'axios';
import { Api } from './constants';

axios.get(Api.USERS).then(data=>{
    console.log("Data");
});
