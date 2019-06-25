import React, { Component } from 'react';
import { connect } from 'dva'
import { Link } from 'dva/router'
import './ShopList.css'
export default connect((state) => {
    return state
})(class ShopList extends Component {

    getTitles() {
        this.props.dispatch({
            type: 'barTitle/getTitle',
            payload: {
                userName: 'zhoujunsen'
            }
        })
    }
    render() {
        console.log(this)
        return (

            <div className="list-left" style={{ height: '1281.38px' }}>
                <ul className="list-title" style={{ transitionTimingFunction: 'cubic-bezier(0.1, 0.57, 0.1, 1)', transitionDuration: '0ms', transform: 'translate(0px, 0px) translateZ(0px)' }}>
                    <li className="bc color-red" cate_id={243} data-bc="1_243">女装</li>
                    <li className="bc" cate_id={244} data-bc="2_244">男装</li>
                    <li className="bc" cate_id={245} data-bc="3_245">母婴</li>
                    <li className="bc" cate_id={2340} data-bc="4_2340">鞋子</li>
                    <li className="bc" cate_id={36} data-bc="5_36">箱包</li>
                    <li className="bc" cate_id={37} data-bc="6_37">居家百货</li>
                    <li className="bc" cate_id={38} data-bc="7_38">家电数码</li>
                    <li className="bc" cate_id={39} data-bc="8_39">内衣配饰</li>
                    <li className="bc" cate_id={40} data-bc="9_40">美妆</li>
                    <li className="bc" cate_id={41} data-bc="10_41">运动户外</li>
                    <li className="bc" cate_id={42} data-bc="11_42">美食</li>
                    <li className="bc" cate_id={43} data-bc="12_43">车品文娱</li>
                    <li className="bc" cate_id={2310} data-bc="13_2310" style={{ borderBottom: '1px solid rgb(249, 249, 249)' }}>通讯旅游</li>
                </ul>
            </div>

        )
    }


})



