import React from 'react';
import "@styles/base.less";
import { Tabs,Row,Col,Input,Select,Switch,Button,Icon} from 'antd';
const { TabPane } = Tabs;
const { Option } = Select;
class Traction extends React.Component {
    render() {
        return (
             <div>
                 <Tabs tabPosition="top">
                    <TabPane tab="sgp" key="1">
                        <Row className="form-filed">
                            <Input placeholder="关键字" style={{width:100}} />
                            <Select name="circuit__uuid__exact" defaultValue="" style={{width:120}}>
                                <Option value="">请选择线路</Option>
                                <Option value="ds">test金盾</Option>
                                <Option value="E">test4</Option>
                                <Option value="TE">test-dhsadj</Option>
                            </Select>
                            <Button type="primary" icon="search">Search</Button>
                            <MySwitch
                            checkedChildren="自动刷新开启"
                            unCheckedChildren="自动刷新关闭"
                            defaultChecked
                            size="samll"
                            />
                        </Row>
                    </TabPane>
                    <TabPane tab="台湾机房" key="2">
                        Content of Tab 2
                    </TabPane>
                </Tabs>
             </div>
        )
    }
}

export default Traction;
