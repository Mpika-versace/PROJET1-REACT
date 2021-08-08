import React,{Fragment} from 'react';

const LifeCycleFunParent=(props)=>{
    
        console.log('%c Je suis dans le render de lifeCycleFunParent','color:#ffc107;font-size:19px;font-weight:bold');
        return (
            <div className='border-warning border my-2'>
                <h3 className="text-warning fw-bold">Life Cycle Function Parent</h3>
                <p>{props.heroName}</p> 
                {/* <p>{this.props.age} ans</p> */}
            </div>
        )
    
};
// export default LifeCycleFunParent
export default React.memo(LifeCycleFunParent); 
/* pour eviter que le render se charge à nouveau sans porter une modification d'un elment 
coté function (on peut la recharge dans la console)
 */