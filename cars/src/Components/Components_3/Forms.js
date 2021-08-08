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
        //  console.log(this.state.comment);
        //  console.log(e.target);
        //  this.setState({comment:})
         
     };
     pseudoForm=(e)=>{
        //  console.log(e.target.value);
         this.setState({pseudo:e.target.value});
        
     };
     textareaForm=(e)=>{
        //  console.log(e.target.value);
         this.setState({comment:e.target.value})
     }
    render() { 
        return (
            <div className="mycars-form " >
                <form className="form" onSubmit={this.submitForm}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Pseudo:</label>
                        <input type="text" id="name" className="form-control" onChange={this.pseudoForm}/>
                    </div>
                    <select className="form-select" aria-label="Default select example"  onChange={this.seclectColor}  >
                        {this.state.colors.map((color,index)=><option key={index} value={color} >{color}</option>)}
                    </select>
                    <div className="mb-3">
                        <label htmlFor="comment" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="comment" rows="3" onChange={this.textareaForm}></textarea>
                    </div>
                    <button className='btn btn-success' type="submit">Valider</button>
                </form>
                    <Image 
                        color={this.state.color}
                        pseudo={this.state.pseudo}
                        commentaire={this.state.comment}
                     />
            </div>
          );
    }
}
 
export default Forms;