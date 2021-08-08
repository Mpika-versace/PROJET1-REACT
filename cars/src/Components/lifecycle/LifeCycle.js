import React, { Component } from 'react'
import LifeCycleFunParent from '../LifeCycleInFun/LifeCycleFunParent';
import BtnChangeStateLifeCycle from '../LifeCycleInFun/BtnchangeStateLifeCycle';
import ChildLifeCycle from './ChildLifeCycle';
import PureComp from './PureComp';




 class LifeCycle extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              title:'Parent Component',
              step:1,
              age:32,
              heroName:'Batman'
         }
        //  console.log(` Etape ${this.state.step} Je suis dans ${this.state.name}`);
       
     }
    //  x=()=>this.setState({name:'state modifié'})
     //amount phase
    //  componentDidMount() {
    //     //  this.x();
    //     // console.log(`Etape ${this.state.step} Je suis dans componentDidMount `);
    //     //update phase
    //     this.setState({
    //         step:this.state.step+1,
    //         name:this.props.name,
            
    //     });
    //     // console.log(`Etape ${this.state.step} I in the second step componentDidMount `);
    //  };
     addOneYear=(data)=>{
        // console.log(data)
        this.setState((prevState)=>({
            
            age:prevState.age+1,
            heroName:'Captain America'
        }))
     }
     strong=()=>{
         this.forceUpdate(()=>{
             console.log('force le passage');
             this.setState((prevState)=>({
                age:prevState.age+1
            }))
         })
     }
    //  acces aux objet mis à jours
     componentDidUpdate(prevProps, prevState) {
        // console.log('%c Etape '+ this.state.step +'I in the second step componentDidUpdate', 'color:red; font-size:17px;background-color:yellow');
        // console.log(prevState);
        // console.log(prevProps);
        // console.log(this.state);
     }
    
    //  phase de demontage
     componentWillUnmount() {
        // console.log("I am in the third step componentWillUnmount");
     };

     shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        // console.log(this.props.age);
        console.log('je suis dans shouldComponentUpdate true');
        // if (nextState!==this.state.age) {
        //     return true;
        // }
       
        //     return false;
        return true;
          
    }
     
     
    render() {
      console.log('%c Etape-'+ this.state.step+ ' Je suis dans le render Parent','color:red;padding:10px;font-size:19px;font-weight:bold')

        return (
            
            <div className='border border-danger my-3'>
                {/* {console.log(`Etape ${this.state.step} mis à jour DOM`)} */}
                <h1 className=' text-danger fw-bold py-2'>{this.state.title} Life cycle</h1>
                <ChildLifeCycle age={this.state.age} heroName={this.state.heroName}></ChildLifeCycle>
                <PureComp /*age={this.state.age}*/ heroName={this.state.heroName}></PureComp>
                <LifeCycleFunParent heroName={this.state.heroName}></LifeCycleFunParent>
                <BtnChangeStateLifeCycle fun={this.addOneYear}></BtnChangeStateLifeCycle>
                
                {/* <button onClick={this.addOneYear.bind(this,2)} className="btn btn-primary">add year/change name</button> */}
                <button onClick={this.strong} className="btn btn-primary m-1">force update</button>
            </div>
        )
    }
}

export default LifeCycle
