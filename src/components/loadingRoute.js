import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../stylesheets/routes.css";

const LoadingRoute = props => {
    NProgress.start();
    useEffect(() => NProgress.done(), []);
    return <Route {...props} />;
};

export default LoadingRoute;
