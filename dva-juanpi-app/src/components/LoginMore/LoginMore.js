import React from 'react'
import {Card, Spin, Icon} from 'antd'
import { connect } from 'dva'

class UiSpin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this)
    return (
      <div style={{
          position:"fixed",
          top:'40%',
          left:'40%',
          zIndex:99
          
      }}>
          { this.props.barTitle.toggle==='show'?( <Card >
          <Spin size={"large"}></Spin>
        </Card>):''}
       
      </div>
    )

  }

}

export default connect((state) => {
    return state
})(UiSpin);
