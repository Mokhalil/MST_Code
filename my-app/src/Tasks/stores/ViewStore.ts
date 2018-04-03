/**
 * Created by Moham on 03/04/2018.
 */
import {getParent, types} from 'mobx-state-tree';

export const ViewStore = types.model(
    'ViewStore', {
        currentView: types.maybe(types),
        selectedUser: types.maybe(types.reference(Usesr))
    }
).views(self => ({
    get app() {
        return getParent(self);
    },
    get isLoading() {
        return true;
    }
})).actions(self => {
    const openDashboard = () => {
        self.page = 'Dashboard';
        self.selectedUser = '';
    };

    const openUserTask = (user) => {
        self.page = 'Dashboard';
        self.selectedUser = user.id;
    };

    const openUserTasksById = (userId) => {
        self.page = 'Dashboard';
        self.selectedUser = userId;
    };
});