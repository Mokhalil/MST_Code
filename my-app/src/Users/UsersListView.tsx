import * as React from "react";
import { inject, observer } from "mobx-react";


const UsersListView = inject("store", "viewStore")(
  observer((props: any) => {

    
    console.log(props.viewStore.currentView.ActiveUsers.state);
    switch (props.viewStore.currentView.ActiveUsers.state) {
      case "pending":
        return <div>Loading Data</div>;
      case "rejected":
        return <div>Error</div>;
      case "fulfilled":
        return <div>Data Served</div>;
    }

    if (props.store.isLoading) {
      return <div>Coco wawa Loading data</div>;
    }

    if (props.store.users.length == 0) {
      return <div>No Items</div>;
    }

    if (props.store.users.length > 0) {
      return <div>Data has arrived.</div>;
    }

    return <div>Case</div>;
  })
);
export default UsersListView;
