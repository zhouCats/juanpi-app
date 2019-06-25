import React, { Component } from 'react';
import { connect } from 'dva'
import './Tabbar.css'
import {Link} from 'dva/router'

export default connect((state) => {
    return state
})(class Tabbar extends Component {

    // constructor(props) {
    //     console.log('-----------constructor-------------')
    //     super(props)
    //     this.state = {
    //     }

    // }
    getTitles() {
        this.props.dispatch({
            type: 'barTitle/getTitle',
            payload: {
                userName: 'zhoujunsen'
            }
        })
    }
    render() {
        // console.log(this)
        return (

            <div>
                <div className="sc-cMljjf QllnW">
                    <ul className="sc-jAaTju izStSE" >
                    {
                        // console.log(this.props.barTitle.tabbar)
                        this.props.barTitle.tabbar.map((item,index)=>{
                            // console.log(item)
                            return (
                                 <Link  onClick={
                                     this.getTitles.bind(this)
                                 } to={{ 
                                     pathname: item.url,
                                    search: `?tab=${index}`
                                }} className={item.isBadge?"act sc-jDwBTQ fSJdS":"sc-jDwBTQ fSJdS"} key={index}><img className="sc-gPEVay gtkfWd" src={item.icon} />{item.title}</Link>
                            )
                        })
                    }
                        
                        {/* <a className="sc-jDwBTQ fSJdS" ><img className="sc-gPEVay gtkfWd" src="https://s1.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png" />分类</a>
                        <a className="sc-jDwBTQ fSJdS" ><img className="sc-gPEVay gtkfWd" src="https://s1.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png" />购物车</a>
                        <a className="sc-jDwBTQ fSJdS"><img className="sc-gPEVay gtkfWd" src="https://s1.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png" />我的卷皮</a> */}
                    </ul>
                </div>
            </div>
        )
    }


})