import React,{Component,Fragment} from "react";
import ReactDOM from "react-dom";
import Mycars from "./Components/Mycars";
import './sass/index.css';
import "bootstrap/dist/css/bootstrap.min.css";

 
class Cars extends Component {
    // this.state = {  }

render() { 
    return ( 
        <Fragment>
                <Mycars></Mycars>
        </Fragment>
        
     );
}
}


ReactDOM.render(<Cars />,document.querySelector('#root'));








































// class Cars extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             presentation:[
//                 {
//                     nom:'Mpika',
//                     prenom:'versace',
//                     id:1,
//                     age:23
//                 },
//                 {
//                     nom:'Defrenne',
//                     prenom:'Anne',
//                     id:2,
//                     age:20
//                 },
//                 {
//                     nom:'Camberlin',
//                     prenom:'Elisabeht',
//                     id:3,
//                     age:12
//                 }  
//             ]
//          }
        
//     };
//     ragenire=()=> {
//         const changeAge=this.state.presentation;
//         const newState=changeAge.map(ages=>{
//             ages.age-=5; 
//             if(ages.age<5) {
//                 ages.age=25;
//             }
//             return ages.age;
//         });
//         console.log(newState);
//          this.setState({newState})
//     };
//     render() { 
              
//         return ( 
//         <div>
//             <Mycars titre={this.state.presentation} />
//             <button className='btn btn-info mt-3' onClick={this.ragenire} >Ragenir</button>
//         </div> );
//     }
// }
