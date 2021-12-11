import {useState} from "react";

function Card (props){

    let count
    const [dict1, setDict1]=useState(
        {count:0, userName:"ayca"}
        );


   // const countClickHandler= () => setCount(count +=1) //1.kullanım
    

    //2.kullanım
    // function countClickHandler (){  
    //     setCount(count+1)
    // }
    function countClickHandler(){
        setDict1(
            { ...dict1, count: dict1.count+1}
        )
    }
    

   
  

    return(
 <div className="card">
  <div className="card-body">
    <h5 className="card-title">Card title {props.cardId}  </h5>
    <h6 className="card-subtitle mb-2 text-muted">
        {count}
    </h6>
    <p className="card-text">
        {dict1.userName} {" "}
        {dict1.email ? dict1.email : "email yok"}  
    </p>
    <button 
    name="count" 
    className="card-link" 
    onClick={countClickHandler}
    >
        +
    </button>
    
  </div>
</div>
    )
}

export default Card