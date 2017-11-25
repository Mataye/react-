import React from  'react';
import PCHeader from "./pcheader";
import PCFooter from "./pcfooter";
import PCNewsContainer from "./pc_news_container";

export default class PCIndex extends React.Component {
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer/>
                <PCFooter></PCFooter>
            </div>
        );
    }
}