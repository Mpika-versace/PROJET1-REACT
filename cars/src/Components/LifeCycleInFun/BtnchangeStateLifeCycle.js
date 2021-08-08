import React from 'react';
function BtnChangeStateLifeCycle(props) {
    console.log(props.fun);
    return(
        <div className="btn">
            <button onClick={props.fun} className="btn btn-primary">add year/change name</button>
        </div>
    )
}
export default React.memo(BtnChangeStateLifeCycle);