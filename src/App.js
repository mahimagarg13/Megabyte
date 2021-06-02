// import {Switch ,Route, BrowserRouter} from "react-router-dom";
import Nav from "./Component/Nav"
import "./Component/Custom.css"

import Head from "./Component/Head"
import Catalog from "./Component/Catalog"
import Allcatag from "./Component/Allcatag"


function App(){
    return(
        <>
        <Nav /> 
    <Head />
    <Catalog />
    <Allcatag />
         </>
    );
}
export default App;