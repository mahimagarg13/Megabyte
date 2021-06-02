import "./Custom.css"
import Image1 from "./Images/image1.jpg"
import Image2 from "./Images/image2.jpg"
import Image3 from "./Images/image3.jpg"
import Image4 from "./Images/image4.jpg"


function Allcatag (){
    return(
<div className="head-clr head-pd  allcatg-h   ">
<img src={Image1} className="poster"  alt="not available"  />
<img src={Image2} className="poster"  alt="not available"  />
<img src={Image3} className="poster"  alt="not available"  />
<img src={Image4} className="poster"  alt="not available"  />


</div>
    );
}
export default Allcatag;