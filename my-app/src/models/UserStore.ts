/**
 * Created by Moham on 02/04/2018.
 */
import { types, flow, destroy, applySnapshot } from "mobx-state-tree";
import { User } from "./User";
import { DataProviderFactory } from "./DataProvider";

export const UserStore = types
  .model("Users", {
    users: types.optional(types.array(User), []),
    isLoading: types.boolean
  })
  .actions(self => {
    const usersDataProvider = DataProviderFactory.getUsersDataFactory();

    const loadUsers = flow(function* loadUsers() {
      try {
        self.isLoading = true;
        const response = yield usersDataProvider.getAll();
        console.log(response);
        if (response) applySnapshot(self.users, response);
        //self.users = response.map((jsonUser: any) => User.create(jsonUser));
      } catch (error) {
        console.log("Error getting the datat " + error);
        throw new Error(error.message);
      } finally {
        self.isLoading = false;
      }
    });

    const sayHi = () => {
      console.log("Hi");
    };

    const remove = (item: any) => {
      destroy(item);
    };
    const add = (item: any) => {
      self.users.push(item);
    };

    return {
      loadUsers,
      remove,
      add,

      sayHi
    };
  })
  .actions(self => {
    const afterCreate = () => {
      if (self.users.length == 0) self.loadUsers();
    };

    return { afterCreate };
  });
