import React from  'react';
import {Row,Col,BackTop} from "antd";
import WiseHeader from "./wiseheader";
import WiseFooter from "./wisefooter";
export default class WiseNewsDetail extends React.Component {
    constructor(){
        super();
        this.state= {
            newsItem:"",
        }
    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({newsItem: json});
            document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        });
    };

    createMark(){
        return {__html:this.state.newsItem.pagecontent}
    }

    render(){
        return(
            <div id="mobileDetailsContainer">
              <WiseHeader/>
                <div className="ucmobileList">
                      <Row>
                          <Col span={24} className={"container"}>
                              <div className={"article"} dangerouslySetInnerHTML={this.createMark()}></div>
                          </Col>
                      </Row>
                </div>
             <WiseFooter/>
              <BackTop/>
          </div>
        );
    };
}

