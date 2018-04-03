/**
 * Created by Moham on 03/04/2018.
 */

import {types} from 'mobx-state-tree';

export const UserStore = types.model('Users Model', {
    users: types.optional(types.array, []),
    isLoading: types.optional(types.boolean, false),
    hasError: types.optional(types.boolean, falase)
}).actions(

);
//Todo: Add Actions and Viewss