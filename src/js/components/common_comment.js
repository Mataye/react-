import React from  'react';
import {
    Row,
    Col,
    Form,
    Button,
    Card,
    Input
}from "antd";
const FormItem = Form.Item;
class CommonComment extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        }

    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({comments: json});
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formdata = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions)
            .then(response => response.json())
            .then(json => {
            this.componentDidMount();//重新加载页面
        });
    };

    render() {
        let {getFieldDecorator} = this.props.form;
        let comment = this.state.comments;
        let showComment = comment.length
            ?
            comment.map((commentItem, index) => (
                <Card key={index} title={commentItem.UserName} extra={<a href="#">发布于 {commentItem.datetime}</a>}>
                    <p>{commentItem.Commnets}</p>
                </Card>
                )
            )

            : "暂无评论"
        ;

        return (
            <div>
                <Row>
                    <Col span={24}>
                        {showComment}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem lable={"您的评论"}>
                                <Input type="textarea" placeholder="随便写" {...getFieldDecorator("remark",{initialValue:''})}/>
                            </FormItem>
                            <Button type={"primary"} htmlType={"submit"}>提价评论</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    };
}
export default CommonComment = Form.create({})(CommonComment);
