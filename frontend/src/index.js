import React from "react";
import ReactDOM from "react-dom"
import App from "./component/app/app";
import {Provider} from "react-redux";
import store from "./redux/store";
import {getAllNumbers} from "./redux/dispatch-action";

store.dispatch(getAllNumbers)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));





