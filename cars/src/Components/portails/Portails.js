import React, { Component } from 'react';
import ModalPortails from './ModalPortails';

class Portails extends Component {

    state={
        showModale:false
    }
    modal=()=>{
        this.setState({
            showModale:true
        })
        // const ModalPortail=(this.state.showModale===true)?<ModalPortails></ModalPortails>:'';
        // return ModalPortail;
    }
    render(){
        const showModales=(this.state.showModale)? <ModalPortails></ModalPortails>:null;
        return (
            <div className="portail">
                <p>Portails en React</p>
                <div className="modales bg-info py-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Reiciendis, assumenda!
                    </p>
                    <button onClick={this.modal} className='btn btn-danger'>Output modal</button>
                </div>
                {/* <ModalPortails></ModalPortails>  */}
                {showModales}
            </div>
           
        )
    }
    
}
export default Portails