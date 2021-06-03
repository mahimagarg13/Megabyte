import "./Custom.css"
import logo from "./Images/logo.png"
import gift from "./Images/gift.png"
import bell from "./Images/bell.png"




function Nav(){
    return(
       
        <div className="bg-clr flex-box  ">
        {/* //     <div className="logo-hgt">
        //         <img src={logo} />
        //     </div> */}
            
            {/* <div className="logo-hgt logo-w margin"> */}
                <img src={logo} className="logo-hgt margin logo-w  nav-m cursor"  alt="not available"/>
            
                <button href="#" className="btn-h btn-m margin btn-bg btn-fclr a btn-bdr nav-f-size cursor  ">Home</button>
                <button href="#" className="btn-h btn-m margin btn-bg btn-fclr a btn-bdr nav-f-size cursor ">TV Shows</button>
                <button href="#" className="btn-h btn-m margin btn-bg btn-fclr a btn-bdr nav-f-size cursor "> Movies</button>
                <button href="#" className="btn-h btn-m margin btn-bg btn-fclr a btn-bdr  nav-f-size  cursor ">Recently Added</button>
                <button href="#" className="btn-h btn-m margin btn-bg btn-fclr btn-bdr a  nav-f-size cursor ">My List</button>              
               
               <input  className="cursor btn-h btn-m display s-w btn-bg btn-fclr  a btn-bdr nav-f-size search-mg" type="text" placeholder="Search..."/>
              
                <button href="#" className="btn-h dispaly  b-m btn-bg btn-fclr a cursor btn-bdr nav-f-size nav-mg ">KIDS</button>
                <button href="#" className="btn-h display b-m btn-bg btn-fclr a cursor  btn-bdr nav-f-size  ">DVD</button>
                <img src={gift} className="icon display nav-m cursor"  alt="not available"/>
                <img src={bell} className="icon display nav-m cursor"  alt="not available"/>
           
            </div>
        


    );
}
export default Nav;