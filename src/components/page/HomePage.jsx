import {useState} from "react";
import Card from "./Card";


function HomePage() {

    const[cardCount, setCardCount] = useState(2)

    return(

    <div className="container">
        <div className="row">
            <div className="col-sm-12 my-5">
               <button className="btn btn-primary"
               onClick={()=> setCardCount(cardCount+1)}
               >
                   
                   +</button>
            </div>



      {[...Array(cardCount)].map((item,index)=>{
        return(
            <div className="col-sm-3 mb-3"
             key={index}
             ayca="xxx"
             user="abc"   //properties verebiliyorum.
             >
            <Card cardId={index+1} />
         </div>
        )
      })}



          

          </div>
          </div>      
        

    );
}

export default HomePage