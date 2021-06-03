import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Component/Nav"
import "./Component/Custom.css"
import Home from "./Component/Home"
import Video from "./Component/Video"

// import Head from "./Component/Head"
// import Catalog from "./Component/Catalog"
// import Allcatag from "./Component/Allcatag"


function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Video" component={Video} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;