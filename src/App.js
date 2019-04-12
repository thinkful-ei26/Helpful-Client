import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/footer";
import NavBar from "./components/layout/navBar";
import routes from "./components/routes";
import LoadingRoute from "./components/loadingRoute";

const App = () => {
    return (
        <div className='App'>
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
