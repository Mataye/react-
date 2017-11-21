import React from  'react';
import {Row, Col} from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class WiseHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            current: 'top',
        }
    };
    // handleClick = (e) => {
    //     console.log('click ', e);
    //     this.setState({
    //         current: e.key,
    //     });
    // };

    render(){
        return(
            <div id="wiseheader">
                <header>
                    <img src="./src/images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        );
    };

}

