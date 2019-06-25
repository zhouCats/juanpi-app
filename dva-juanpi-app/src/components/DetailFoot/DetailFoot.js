import React, { Component } from 'react';
import { connect } from 'dva'
import './DetailFoot.css'
import axios from 'axios'
export default connect((state) => {
    return state
})(class Content extends Component {
    constructor(props) {
        console.log('-----------constructor-------------')
        super(props)
        this.state = {
        }

    }
    render() {
        return (
            <div className="sc-eilVRo biqBpV">
                <div className="Home sc-bHwgHz gsNOod sc-TFwJa AQZKI">
                    <img className="sc-dTdPqK hZzUdy" src="https://web.juanpi.com/static/media/home_dark.41f2a808.png" />
                    <span className="sc-itybZL jFebcI"> 首页</span>
                </div>
                <div className="PopShoppingCart sc-laTMn jIGqoB sc-bnXvFD iVwfSH">
                    <img className="sc-fhYwyz gLOWyV" src="https://web.juanpi.com/static/media/cart_icon.5d19f0b4.png" />
                    <span className="sc-jzgbtB ktUUzU">购物车</span>
                </div>
                <div className="sc-eerKOB aLTFY">
                    <div className="OneBtn sc-gJWqzi eBSgt" data-disabled="false" data-newvip={0}>
                        <div className="sc-bMvGRv jYITyy">
                            立即购买
      </div>
                    </div>
                    <div className="TwoBtn sc-CtfFt eSPJkQ">
                        <div className="sc-bMvGRv jYITyy">
                            加入购物车
      </div>
                    </div>
                </div>
            </div>

        )
    }

})
