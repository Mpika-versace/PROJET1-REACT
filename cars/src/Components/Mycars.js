import React,{Component, Fragment} from "react";
import Car from "./Car";
import Mother from "./Components_2/Mother";
import Forms from "./Components_3/Forms";

class Mycars extends Component {
    
    state = { 
        cars:[
            {name:'Ford',color:'Red',year:2000},
            {name:'Mercedez',color:'',year:2010},
            {name:'Peugeot',color:'Green',year:2020}
        ],
        title:"My Car catalog"

    };
    addYear=()=>{
          const  newYear=this.state.cars.map((car,index)=>{
              return car.year-=10
          });
          console.log(newYear);
          this.setState({newYear});
          this.setState({title:'new My Car catalog'})
    }
    
    render() { 
         const getYearNow=new Date().getFullYear();
         console.log(getYearNow);
        return ( 
            <div className="container">
                <div className="mycars row g-3 text-center">
                    <div className="col-md-6 border text-center mycars">
                        <h1>
                            {this.state.title}
                        </h1> 
                        <button onClick={this.addYear} className="btn btn-success my-4"> +10 ans</button>
                        <div className="mycars-car">
                            <table className=" table table-info table-bordered">
                                <thead>
                                    <tr className="table-dark">
                                        <th>Brand</th>
                                        <th>Age</th>
                                        <th>Color</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    {
                                        this.state.cars.map((car,index)=>{
                                            console.log(car);
                                            const {name,color,year}=car;
                                            return(
                                                <Fragment key={index}>
                                                        <Car
                                                            name={name}
                                                            color={color}
                                                            year={getYearNow-year+' ans'}
                                                        />
                                                </Fragment>
                                                
                                            )  
                                        })
                                    }
                                </tbody>
                                
                            </table>
                                
                                
                        </div>
                        <Forms />
                    
                    </div>
                    <div className="col-md-6 mycars-mother ">
                         <Mother />
                    </div>
                </div>
            </div> 
         );
    }
}
 
export default Mycars;



// class Mycars extends Component {

//    state = { title:'Catalogue de voitures' }
     
//      noCopy=()=>{
//             alert('don\'t copy this topic');
//      };
//      addStyles=(e)=>{
//          document.body.style.backgroundColor=`RGB(${e.clientY},${e.clientX},5)`;
//             console.log(e.target.classList.toggle('style'));
//             e.target.classList.toggle('style');
//      }
//      // changer le titre en dur
//      changetitle=()=>{
//          console.log(this);
//          this.setState({title:'new catalogue cars'});
//      };
//     //  change the title via param
//      changeTitleViaParam=(title)=>{
        
//         this.setState({title:title});
//         //if the argument you want to change to the same name as the objet
//         // you put just the name of objet
//     }
//     //  change the title via bind methods
//     changeTitleViabind=(title)=>{
//         console.log(this);
//         this.setState({title:title});
//     }
//     //  change the title via inputmethods
//     changeTitleViaInput=(e)=>{
//         const userInput=e.target.value;
//         if (userInput) {
//             this.setState({title:userInput});
//         } else {
//             this.setState({title:'Catalogue de voitures'});
//         }
        
//     }

    
   
//     render() { 
        
//        const name=this.props.titre;
//         return (
//             <div className="mycars row align-items-center g-3">
//                 <div className='mycars-cars col-md-4'>
//                     <h1 className="text-center">{this.state.title}</h1>
//                     <Cars color="red">Ford</Cars>
//                     <Cars color="blue"></Cars>
//                     <Cars color="green">Peugeot</Cars>
//                     <div className='my-3'>
//                         <button onClick={this.changetitle} className='btn btn-danger '> Changer titre dur</button>
//                         <button onClick={()=>{this.changeTitleViaParam('change the title via param')}} className='btn btn-success m-1'> via param</button>
//                         <button onClick={this.changeTitleViabind.bind(this,'change title with method bind')} className='btn btn-primary'> via bind</button>
//                         <input  onChange={this.changeTitleViaInput} className="form-control w-50" type='text' />
//                     </div>
//                 </div>
                
//                 <div className='mycars-array text-center col-md-4'>
                    
//                     {/* // <h2 key={elements.id} >{elements.nom} {elements.prenom} {elements.age} ans</h2> */}
//                         <div className="card card-body mb-3" >
//                             <ul className="list-group">
//                                 {name.map(elements=>
//                                 <li onCopy={this.noCopy} onMouseOver={this.addStyles} className="list-group-item" key={elements.id} >{elements.nom} {elements.prenom} {elements.age} ans</li> 
//                                 )}
//                                 {/* <li className="list-group-item" >{elements.age}</li>    */}
//                             </ul>
//                         </div>
                  
                    
//                 </div>
                
//             </div> 
//          );
//     }
// }
 
