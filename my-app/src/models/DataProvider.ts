/**
 * Created by Moham on 02/04/2018.
 */
import axios from 'axios';
import { Api } from './constants';

export interface IDataProvider {
    getAll():any ;
    //getById(id:number):Promise<any>;
}

export class UsersDataProvider implements IDataProvider {

    public async getAll() {
        const response = await axios.get( Api.USERS)
        return response.data;
    }
}

export class DataProviderFactory {
    public static  getUsersDataFactory(): UsersDataProvider {
        return new UsersDataProvider();
    }
}