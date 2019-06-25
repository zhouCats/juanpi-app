import React, { Component } from 'react';
import { connect } from 'dva'
import { Link } from 'dva/router'
import './Mylogin.css'
export default connect((state) => {
  return state
})(class Mylogin extends Component {

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
      <div className="app notfull vip">
        <div id="head">
          <div className="fixtop">
            <a id="t-find" href="javascript:history.go(-1);" className="btnBack"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&sv=449ce9ee" /></a>
            <span id="t-index" style={{color:'#fff'}}>登录</span>
            <a id="t-user" style={{fontSize:'18px',color:'#fff',marginRight:'15px'}}  className="free-reg" rel="nofollow" target="_parent" >注册</a>
          </div>
        </div>
        <div className="wap-login">
          <ul id="login_switch" className="login-txt">
            <li className="active">卷皮账号登录</li>
            <li className>手机快捷登录</li>
          </ul>
          <form id="normal-logo" action="/user/login" method="post" encType="application/x-www-form-urlencoded" >
            <input name="return_url" type="hidden" defaultValue="//m.juanpi.com/cart/?select=3_1" />
            <div className="login-info">
              <ul className="info-input">
                <li>
                  <input type="text" name="username" id="username" placeholder="手机号/邮箱/用户名"  className="normalInput" />
                  <em className="reg-close" style={{ display: 'none' }}><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&sv=449ce9ee" /></em>
                </li>
                <li>
                  <input type="password" name="password" id="password" placeholder="密码" className="normalInput" />
                  <em className="reg-close" style={{ display: 'none' }}><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&sv=449ce9ee" /></em>
                </li>
              </ul>
              <a id="btn_login" className="sub disable-btn" rel="nofollow">登  录</a>
              <div id="login_l" className="other-action"><label className="freeLogin on"><input type="checkbox" className="ck" name="auto" defaultChecked="checked" /><i className="before"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&sv=449ce9ee" /></i>两周内免登录</label><a href="//m.juanpi.com/user/forget" target="_parent" className="free-reg">忘记密码？</a>
              </div>
            </div>
          </form>
          <form id="quick-login" action="/muser/password" method="post" encType="application/x-www-form-urlencoded" style={{ display: 'none' }}>
            <div className="login-info">
              <ul className="info-input clear">
                <li>
                  <input type="tel" pattern="[0-9]*" placeholder="请输入手机号码" id="mobile" name="mobile" className="normalInput" />
                  <em className="reg-close" style={{ display: 'none' }} id="reg-mobile-close"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&sv=449ce9ee" /></em>
                </li>
                <li>
                  <div className="quickLoginHmtl clear">
                    <input type="tel" className="code-txt normalInput fl" id="code" placeholder="请输入验证码" name="code" />
                    <i style={{ display: 'none' }} className="reg-close fl" id="reg-code-close"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/x.png?2dc3a154-1&sv=449ce9ee" /></i>
                    <a className="btn_get get-code disable-code" id="code_btn" href="javascript:;">获取验证码</a>
                  </div>
                </li>
              </ul>
              <input type="hidden" name="mtoken" defaultValue="f23e95b7ff966b92bc6100fbdc05fa3a" id="mtoken" />
              <input type="hidden" name="mtokenact" defaultValue="quick" id="mtokenact" />
              <a id="btn_quick_login" className="sub codeBtn disable-btn" rel="nofollow">登  录</a>
              <a style={{ display: 'none' }} id="normal_login" className="sub disable-btn" rel="nofollow">登  录</a>
              <div id="quick_l" className="other-action"><label className="freeLogin on"><input type="checkbox" className="ck" name="auto_quick" defaultChecked="checked" /><i className="before"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&sv=449ce9ee" /></i>两周内免登录</label><a href="//m.juanpi.com/user/forget" target="_parent" className="free-reg">忘记密码？</a>
              </div>
            </div>
          </form>
          <div className="wap-app">
            <h3 className="third-txt">第三方账号快速登录</h3>
            <div className="third-app clear">
              <a href="//user.juanpi.com/login/connect/type/qq?returnurl=//m.juanpi.com/cart/?select=3_1&platform=wap&app=zhe" className="qq" target="_parent" onclick="_paq.push(['trackEvent', 'login', 'click_login_third_qq', '', '']);"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&sv=449ce9ee" />
              </a>
              <a href="//user.juanpi.com/login/connect/type/taobao?returnurl=//m.juanpi.com/cart/?select=3_1&platform=wap&app=zhe" className="tao" target="_parent" onclick="_paq.push(['trackEvent', 'login', 'click_login_third_taobao', '', '']);"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&sv=449ce9ee" />
              </a>
              <a href="//user.juanpi.com/login/connect/type/sina?returnurl=//m.juanpi.com/cart/?select=3_1&platform=wap&app=zhe" className="sina" target="_parent" onclick="_paq.push(['trackEvent', 'login', 'click_login_third_weibo', '', '']);"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&sv=449ce9ee" />
              </a>
            </div>
            <ul className="protection">
              <li className="fl"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&sv=449ce9ee" />全场包邮</li>
              <li><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/search.png?597c2e82-1&sv=449ce9ee" />100%人工质检</li>
              <li className="fr"><img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/seven.png?902d32d9-1&sv=449ce9ee" />7天放心退</li>
            </ul>
          </div>
        </div>
      </div>

    )
  }


})