import React, {Component} from 'react';
class ModalPortails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( 
            <div className="modale-portail">
                <div className='bg-light p-4'>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    consectetur adipisicing elit.
                    </p>
                    
                    <button className='btn btn-success'>Hide modal</button>
                     
                </div>    
            </div>
         );
    }
}
 
export default ModalPortails ;