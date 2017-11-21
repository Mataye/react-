import React from  'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import PCIndex from  './components/pcindex';
import WiseIndex from  './components/wiseindex';
import MediaQuery from 'react-responsive';
export default class ComponentRoot extends React.Component{
        render(){
            return(
                <div>
                    <MediaQuery query="(min-device-width: 1224px)">
                        <PCIndex/>
                    </MediaQuery>

                    <MediaQuery query="(max-device-width: 1224px)">
                        <WiseIndex/>
                    </MediaQuery>



                </div>
            );
        }
}

ReactDOM.render(
    <ComponentRoot/>,
    document.getElementById("mainContainer")
);

