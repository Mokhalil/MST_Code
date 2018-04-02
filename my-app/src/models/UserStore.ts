/**
 * Created by Moham on 02/04/2018.
 */
import { types, flow } from "mobx-state-tree";
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
        console.log (response);
        if (response)
          self.users = response.map((jsonUser: any) => User.create(jsonUser));
      } catch (error) {
        console.log("Error getting the datat " + error);
        throw new Error(error.message);
      } finally {
        self.isLoading = false;
      }
    });

    return {
      loadUsers
    };
  });
