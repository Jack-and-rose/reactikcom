import React from 'react';
import { Tabs} from 'antd';
const { TabPane } = Tabs;
class Traction extends React.Component {
    render() {
        return (
             <div>
                 <Tabs tabPosition="top">
                    <TabPane tab="sgp" key="1">
                        Content of Tab 1
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
