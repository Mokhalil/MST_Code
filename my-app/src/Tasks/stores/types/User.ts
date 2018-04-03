/**
 * Created by Moham on 03/04/2018.
 */

import {types} from 'mobx-state-tree';

export const User = types.model(
    'User Model',
    {
        id: type.identifier(types.number),
        name: types.maybe(types.string),
        username: types.maybe(types.string),
        email: types.maybe(types.string),
        address: types.model('Address Model', {
            street: types.maybe(types.string),
            suite: types.maybe(types.string),
            city: types.maybe(types.string),
            zipcode: types.maybe(types.string),
        }),
        phone: types.maybe(types.string),
        website: types.maybe(types.string),
        company: types.model('Company', {
            name: types.maybe(types.string),
            catchPhrase: types.maybe(types.string),
            bs: types.maybe(types.string)
        })
    }.actions(self => {

        //Change name
        changeName = (newName: string) => {
            self.name = newName;
        };

        //change userName
        changeUserName = (newUserName: string) => {
            self.userName = newUserName;
        };
    })
);