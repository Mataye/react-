import React from  'react';
import {Row,Col} from "antd";
import {Tabs,Carousel} from  "antd";
import PCNewsBlock from  "./pc_news_block";
import PCNewsImgBlock from './pc_news_img_block';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
    constructor(){
        super();
    };
    render(){
        const settings= {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };
        return(
            <Row>
                <Col span={2}></Col>
                <Col span={20} className="container">
                    <div className="left-container">
                        <div className="carousel">
                            <Carousel  {...settings}>
                                <div><img src="./src/images/carousel_1.jpg"/></div>
                                <div><img src="./src/images/carousel_2.jpg"/></div>
                                <div><img src="./src/images/carousel_3.jpg"/></div>
                                <div><img src="./src/images/carousel_4.jpg"/></div>
                            </Carousel>
                        </div>
                    </div>
                    <Tabs className="tabs_news">
                        <TabPane tab="头条新闻" key="1">
                            <PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
                        </TabPane>
                        <TabPane tab="国际" key="2">
                            <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
                        </TabPane>
                    </Tabs>
                    <div>
                        <PCNewsImgBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
                        <PCNewsImgBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>
        );
    };
}

