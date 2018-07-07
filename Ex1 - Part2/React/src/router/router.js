import React from "react";
import { Route } from "react-router-dom";
import Stories from "../Components/Stories";
import StoryById from "../Components/StoryById";
import StoryByIdAndPrice from "../Components/StoryByIdAndPrice";

import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={Stories} />
            <Route  path="/StoryById" component={StoryById} />
            <Route  path="/StoryByIdAndPrice" component={StoryByIdAndPrice} />

        </React.Fragment>
    );}

export default ReactRouter;

