import { observable, action } from "mobx";
import { fromPromise } from "mobx-utils";
import { Api } from "../models/constants";
import axios from "axios";
/**
 * Created by Moham on 02/04/2018.
 */

export class ViewStore {
  @observable currentUser = null;
  @observable currentView:any = null;

  @action
  showActiveUsers() {
    this.currentView = {
      name: "Active Users",
      ActiveUsers: fromPromise(axios.get(Api.USERS))
    };
  }
}
