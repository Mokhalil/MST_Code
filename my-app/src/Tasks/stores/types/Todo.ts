/**
 * Created by Moham on 03/04/2018.
 */


import {types} from 'mobx-state-tree';
import {User} from './User';

export const Todo = types.model({
    userId: types.reference(User),
    id: types.identifier(types.number),
    title: types.maybe(types.string),
    completed: types.optional(types.boolean, false)
});
