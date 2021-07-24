import React, {Component} from 'react';
import Image from './Images'
class Forms extends Component {
   
    state = { 
        color:'',
        pseudo:'',
        colors:["none","red",'blue','yellow','green'],
        comment:''
     }
     seclectColor=(e)=>{
        //  console.log(e.target.value);
        this.setState({color:e.target.value});
     };
     submitForm=(e)=>{
         e.preventDefault();
         console.log(e);
         
     };
     pseudoForm=(e)=>{
        //  console.log(e.target.value);
         this.setState({pseudo:e.target.value});
        
     }
    render() { 
        return (
            <div className="mycars-form " onSubmit={this.submitForm}>
                <div className="form">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Pseudo:</label>
                        <input type="text" id="name" className="form-control" onChange={this.pseudoForm}/>
                    </div>
                    <select className="form-select" aria-label="Default select example"  onChange={this.seclectColor}  >
                        {this.state.colors.map((color,index)=><option key={index} value={color} >{color}</option>)}
                    </select>
                    <div className="mb-3">
                        <label htmlFor="comment" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="comment" rows="3"></textarea>
                    </div>
                    <button className='btn btn-success' type="submit">Valider</button>
                </div>
                    <Image 
                        color={this.state.color}
                        pseudo={this.state.pseudo}
                     />
            </div>
          );
    }
}
 
export default Forms;