import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/navBar";
import Footer from "./components/layout/footer";
import "./App.css";
import routes from "./components/routes";
import LoadingRoute from "./components/loadingRoute";

const App = () => {
    return (
        <div className='App App-min-height'>
            <NavBar />
            <Switch>
                {routes.map((route, i) => (
                    <LoadingRoute key={i} {...route} />
                ))}
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
