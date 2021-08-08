import React, { Component } from 'react'

export class ChildLifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             nameHeroes:'Spiderman'
        }
        // console.log('Je suis dans le constructor enfant')
    }
    static getDerivedStateFromProps(props, state) {
        // console.log('%c je suis dans getDerivedStateFromProps enfant','color:red; font-size:16px;background:yellow')
        // console.log(state);
        // console.log(props)
        return null
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(nextProps);
    //     // console.log(this.props.age);
    //     // console.log('je suis dans shouldComponentUpdate');
    //     if (nextProps!==this.props.age) {
    //         return true;
    //     }
       
    //         return false;
          
    // }
    // componentDidMount() {
    //     console.log('Je suis dans le componentDidMount enfant')
    // }
    
    
    render() {
        console.log('%c Je suis dans le render enfant childlifecycle','color:blue; font-size:19px; font-weight:bold;');
        return (
            <div className='border border-primary my-2'>
                <h3 className='text-primary fw-bold'>Child life cycle</h3>
                
               {/* {console.log('Je suis dans le DOM enfant')} */}
               
               <p>{this.props.heroName}</p>
               <p>{this.props.age} ans</p>
            </div>
        )
    }
}

export default ChildLifeCycle
