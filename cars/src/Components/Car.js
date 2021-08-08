import React from 'react';

    const Car=(props)=>{
        // console.log(props);
        const color=(props.color)?props.color:"No color";
        return(
            <tr className="mycars bg-info py-2 my-2">
                <td>{props.name}</td>
                <td>{props.year}</td>
                <td>{color}</td> 
                
            </tr>
        );
    }
    export default Car;



    
// const Cars=(props)=>{
//     const color=props.color;
//     let children=props.children;
//     let child=(children)?props.children:'néant';
//     return(
//         <div className="car">
//             <p className='brand'>Brand :{child}</p>
//             <p className='color'>Color :{color}</p>
//         </div>
//     )
// }
