import {types} from 'mobx-state-tree';
import {UserStore} from './UserStore';
import {ViewStore} from './ViewStore';
/**
 * Created by Moham on 03/04/2018.
 */

export const AppStore = types.model('App Store', {
    userStore: types.optional(UserStore, {users: {}}),
    view: types.optional(ViewStore, {})
    //Todo : Add ViewStore
}).views(self => ({

    get Users() {
        return self.userStore.users;
    }


}));

//Todo: Add Views and Actions of AppStore