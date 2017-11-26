import React from  'react';
import {Row,Col,BackTop} from "antd";
import PCHeader from "./pcheader";
import PCFooter from "./pcfooter";
import PCNewsImageBlock from './pc_news_img_block';
export default class PCNewsDetail extends React.Component {
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
          <div>
              <PCHeader/>
              <Row>
                  <Col span={2}>
                  </Col>
                  <Col span={14} className={"container"}>
                      <div className={"article"} dangerouslySetInnerHTML={this.createMark()}></div>
                  </Col>
                  <Col span={6}>
                      <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
                  </Col>
                  <Col span={2}>
                  </Col>
              </Row>
             <PCFooter/>
              <BackTop/>
          </div>
        );
    };
}

