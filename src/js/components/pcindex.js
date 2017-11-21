import React from  'react';
import PCHeader from "./pcheader";
import PCFooter from "./pcfooter";

export default class PCIndex extends React.Component {
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <PCFooter></PCFooter>
            </div>
        );
    }
}