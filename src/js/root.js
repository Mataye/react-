
import React from  'react';
import ReactDOM from 'react-dom';
export default class ComponentRoot extends React.Component{
        render(){
            return(
                <div>init</div>
            );
        }
}







ReactDOM.render(
    <ComponentRoot/>,
    document.getElementById("example")
);

