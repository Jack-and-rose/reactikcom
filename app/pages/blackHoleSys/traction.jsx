import React from 'react';
import "@styles/base.less";
import { Tabs,Row,Col,Input,Select,Switch,Button,Icon,Table} from 'antd';
import axios from 'axios'
const { TabPane } = Tabs;
const { Option } = Select;
class Traction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '线路',
                    dataIndex: 'circuit__uuid__exact'
                },
                {
                    title: 'IP',
                    dataIndex: 'ip',
                    sorter:true
                },
                {
                    title: '黑洞开始时间',
                    dataIndex: 'startTime',
                    sorter: true,
                    width:150
                },
                {
                    title: '备注',
                    dataIndex: 'des'
                },
                {
                    title: '操作',
                    dataIndex: 'option',
                    render:(text,record) => (
                        <span>
                            <Button>{text}</Button>
                        </span>
                        )
                }
            ],
            lists : [],
            selectdRowKeys:[]
        };
        this.fetchDate();
      }
      // 获取列表数据
      fetchDate =()=>{
        axios.get('/api/qy/traction',{
            params: {
                ID: 12345
              }
        })
        .then(res=>{
            console.log(res.data.list)
            this.setState({lists:res.data.list})
        })
    };

    onSelectChange = (selectdRowKeys)=>{
        console.log(selectdRowKeys);
        this.setState({selectdRowKeys})
    }
    render() {
        const {columns,lists,selectdRowKeys} = this.state;
        const rowSelection = {
            selectdRowKeys,
            onChange:this.onSelectChange 
        }
        return (
             <div>
                 <Tabs tabPosition="top">
                    <TabPane tab="sgp" key="1">
                        {/* 搜索条件 和 操作 */}
                        <Row className="form-filed">
                            <Col span={16}>
                                <Input placeholder="关键字" style={{width:100}} />
                                <Select name="circuit__uuid__exact" defaultValue="" style={{width:120}}>
                                    <Option value="">请选择线路</Option>
                                    <Option value="ds">test金盾</Option>
                                    <Option value="E">test4</Option>
                                    <Option value="TE">test-dhsadj</Option>
                                </Select>
                                <Button type="primary" icon="search">Search</Button>
                                <Switch
                                checkedChildren="自动刷新开启"
                                unCheckedChildren="自动刷新关闭"
                                defaultChecked
                                />
                                <span className="switch-tip">关闭自动刷新就能够多选</span>
                            </Col>
                            <Col span={8}>
                                <Button type="primary">增加 黑洞IP列表 </Button>
                            </Col>
                        </Row>
                        {/* 表格 */}
                        <Table className="table-list" rowKey={record => record.key} rowSelection={rowSelection} columns={columns} dataSource={lists} />
                        
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
