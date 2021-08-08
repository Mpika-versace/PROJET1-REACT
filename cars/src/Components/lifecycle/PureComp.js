import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    /*  pureComponent dispose déjà d'une  shouldComponentUpdate
        qui peremt de detecter si ya un changement d'etat local si 
        ya pas de changement il va mettre ajoure le render unitilement
    */
    render() {
        console.log('%c Je suis dans le render de PureCOMPONENT','color:green;font-size:19px;font-weight:bold')
        return (
            <div className='border-success border my-2'>
                <h3 className="text-success fw-bold">Pure Component</h3>
                <p>{this.props.heroName}</p> 
                {/* <p>{this.props.age} ans</p> */}
            </div>
        )
    }
}

export default PureComp
