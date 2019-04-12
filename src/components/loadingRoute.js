import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const LoadingRoute = props => {
    NProgress.start();
    useEffect(() => {
        NProgress.done();
    }, []);
    return <Route {...props} />;
};

export default LoadingRoute;
