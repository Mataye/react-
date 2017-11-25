import React from  'react';
import WiseHeader from "./wiseheader";
import WiseFooter from "./wisefooter";
import
{
    Tabs,
    Carousel
} from "antd";
import  WiseList from "./wiselist";
const TabPane = Tabs.TabPane;

export default class WiseIndex extends React.Component {
    render(){
        const settings= {
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };
        return(
            <div>
                <WiseHeader></WiseHeader>
                <Tabs>
                    <TabPane tab={"头条"} key="1">
                        <div className="carousel">
                            <Carousel  {...settings}>
                                <div><img src="./src/images/carousel_1.jpg"/></div>
                                <div><img src="./src/images/carousel_2.jpg"/></div>
                                <div><img src="./src/images/carousel_3.jpg"/></div>
                                <div><img src="./src/images/carousel_4.jpg"/></div>
                            </Carousel>
                        </div>
                        <WiseList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab={"社会"} key="2">
                        <WiseList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab={"国内"} key="3">
                        <WiseList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab={"国际"} key={"4"}>
                        <WiseList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab={"娱乐"} key={"5"}>
                        <WiseList count={20} type="top"/>
                    </TabPane>
                </Tabs>
                <WiseFooter></WiseFooter>
            </div>
        );
    }
}