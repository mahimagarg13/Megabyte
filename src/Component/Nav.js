import "./Custom.css"


function Nav(){
    return(
       
        <div className="bg-clr   ">
            <div className="logo-hgt">
                <img href="" />
            </div>
            <div className=" ">
                <button href="#" className="btn-h btn-m btn-bg btn-fclr a btn-bdr nav-f-size  ">Home</button>
                <button href="#" className="btn-h btn-m btn-bg btn-fclr a btn-bdr nav-f-size  ">Tv Shows Movies</button>
                <button href="#" className="btn-h btn-m btn-bg btn-fclr a btn-bdr  nav-f-size   ">Recently Added</button>
                <button href="#" className="btn-h btn-m btn-bg btn-fclr btn-bdr a  nav-f-size ">My List</button>              
                <button href="#" className="btn-h btn-m btn-bg btn-fclr a btn-bdr nav-f-size nav-mg ">KIDS</button>
                <button href="#" className="btn-h btn-m btn-bg btn-fclr a btn-bdr nav-f-size  ">DVD</button>

            </div>
        </div>


    );
}
export default Nav;