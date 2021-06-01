// import {Switch ,Route, BrowserRouter} from "react-router-dom";
import Nav from "./Component/Nav"
import "./Component/Custom.css"

import Head from "./Component/Head"
import Catalog from "./Component/Catalog"


function App(){
    return(
        <>
        <Nav /> 
    <Head />
    <Catalog />
         </>
    );
}
export default App;