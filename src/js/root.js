import React from  'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import PCIndex from  './components/pcindex';
import WiseIndex from  './components/wiseindex';
import MediaQuery from 'react-responsive';
import PCNewsDetails from './components/pc_news_detail';
import WiseNewsDetail  from "./components/wise_news_detail";
import { Route,Switch,HashRouter,hashHistory} from 'react-router-dom';
export default class ComponentRoot extends React.Component{
        render(){
            return(
                <div>
                    <MediaQuery query="(min-device-width: 1224px)">
                        <HashRouter history={hashHistory}>
                            <Switch>
                                <Route  path='/details/:uniquekey' component={PCNewsDetails}/>
                                <Route exact  path='/' component={PCIndex}/>
                            </Switch>
                        </HashRouter>
                    </MediaQuery>

                    <MediaQuery query="(max-device-width: 1224px)">
                        <HashRouter history={hashHistory}>
                            <Switch>
                                <Route exact  path='/' component={WiseIndex}/>
                                <Route  path='/details/:uniquekey' component={WiseNewsDetail}/>
                            </Switch>
                        </HashRouter>
                     </MediaQuery>
                </div>
            );
        }
}

ReactDOM.render(
    <ComponentRoot/>,
    document.getElementById("mainContainer")
);

