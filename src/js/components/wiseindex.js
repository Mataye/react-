import React from  'react';
import WiseHeader from "./wiseheader";
import WiseFooter from "./wisefooter";


export default class WiseIndex extends React.Component {
    render(){
        return(
            <div>
                <WiseHeader></WiseHeader>
                <WiseFooter></WiseFooter>
            </div>
        );
    }
}