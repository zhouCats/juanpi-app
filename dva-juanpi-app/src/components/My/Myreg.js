import React, { Component } from 'react';
import { connect } from 'dva'
import { Link } from 'dva/router'
import './Myreg.css'
export default connect((state) => {
    return state
})(class Myreg extends Component {

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
        console.log(this)
        return (
            <div className="app common">
                <div id="head">
                    <div className="fixtop">
                        <a href="javascript:history.go(-1);" id="t-find" className="btnBack"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149-1&sv=449ce9ee" /></a>
                        <span id="t-index">注册</span>
                        <span id="t-user" />
                    </div>
                </div>
                <div className="wap-login">
                    <p className="reg-notice">请确保你的手机畅通，用于接收验证码短信</p>
                    <form id="mobileFrom" method="post" action="/muser/password">
                        <input name="ajax_action" type="hidden" defaultValue encType="application/x-www-form-urlencoded" />
                        <div className="login-info">
                            <ul className="info-input clear">
                                <li>
                                    {/*<i><img  src="//jp.juancdn.com/jpwebapp/images/login/phone.png?ts=20181022174388-1&sv=449ce9ee" /></i>*/}
                                    <input type="tel" pattern="[0-9]*" placeholder="请输入手机号码" id="mobile" name="mobile" className="txt normalInput" />
                                    <em className="reg-close" style={{ display: 'none' }} id="reg-mobile-close"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&sv=449ce9ee" /></em>
                                </li>
                                <li className="clear">
                                    {/*<i><img  src="//jp.juancdn.com/jpwebapp_v1/images/login/code.png?ts=20181022174388-1&sv=449ce9ee" /></i>*/}
                                    <input type="tel" className="txt normalInput code-txt fl" id="code" placeholder="请输入验证码" name="code" />
                                    <i style={{ display: 'none' }} className="reg-close fl" id="reg-code-close"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&sv=449ce9ee" /></i>
                                    <a className="btn_get get-code disable-code fr" id="code_btn" href="javascript:;">获取验证码</a>
                                </li>
                            </ul>
                            <input type="hidden" name="hidMobile" id="hidMobile" defaultValue />
                            <input type="hidden" name="mtoken" id="mtoken" defaultValue="cf82cb6549d76c22bb05685bb8e1a2b7" />
                            <a id="btn-code" href="javascript:;" className="codeBtn disable-btn">下一步</a>
                        </div>
                    </form>
                </div>
            </div>

        )
    }


})