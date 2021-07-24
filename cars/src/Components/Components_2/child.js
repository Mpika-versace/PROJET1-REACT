//Child will the function not a class
import React from 'react';



const Child=(props)=>{
    console.log(props.orderMom.childMessage);
    const orderMom=props.orderMom.motherMessage!==null?<button onClick={props.Answer} className="btn btn-info my-4 ">Answer child</button>:<button disabled className="btn btn-info my-4 ">Answer child</button>
    return(
        <div >
            <h1>{props.child}</h1>
            {orderMom}
            <p>{props.orderMom.childMessage}</p>
        </div>
    )
}
export default Child;