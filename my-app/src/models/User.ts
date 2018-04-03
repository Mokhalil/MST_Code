/**
 * Created by Moham on 02/04/2018.
 */
import { types } from "mobx-state-tree";

export const User = types
  .model("User", {
    id: types.number,
    name: types.string,
    username: types.string,
    email: types.string,
    address: types.model({
      street: types.string,
      suite: types.string,
      city: types.string,
      zipcode: types.string,
      geo: types.model({ lat: types.string, lng: types.string })
    }),
    phone: types.string,
    website: types.string,
    company: types.model({
      name: types.string,
      catchPhrase: types.string,
      bs: types.string
    })
  })
  .actions(self => {
    const changeName = (newName: string) => {self.name=newName};
    const changeUserName = (newUserName: string) => {self.username = newUserName};
    const changeEmail = (newEmail: string) => {self.email= newEmail};


    return {
      changeName,
      changeUserName,
      changeEmail
    };
  });
