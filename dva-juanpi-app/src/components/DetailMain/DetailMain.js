import React, { Component } from 'react';
import { connect } from 'dva'
import axios from 'axios'
import './DetailMain.css'
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
        // console.log(this)
        return (
            
            <div >
                {
                    console.log(this.props.example)
                }
                <section>
                    <div className="sc-cHSUfg gdMLpp">
                        <div className="react-swipe-container " style={{ overflow: 'hidden', position: 'relative', visibility: 'visible' }}>
                            <div style={{ overflow: 'hidden', position: 'relative', width: '100%' }}>
                                <img className="sc-cTjmhe iBFzqT" src={this.props.example.ListItem.pic_url?this.props.example.ListItem.pic_url:''} data-index={0} style={{ float: 'left', width: 375, position: 'relative', transitionProperty: 'transform', left: 0, transitionDuration: '0ms', transform: 'translate(0px, 0px) translateZ(0px)' }} />
                            </div>
                        </div>
                        <div className="sc-cugefK hxVMiY">
                            1/5
    </div>
                    </div>
                </section>
                <section>
                    <div className="sc-kgoBCf bTQvTk">
                        <div className="sc-kGXeez eBHHsD">
                            <div className="sc-kpOJdX caepzu">
                                <span><span className="Price sc-ckVGcZ lmuUPI"><span style={{ fontSize: '0.682667rem' }}>¥</span>{this.props.example.ListItem.cprice}</span><span className="sc-jKJlTe cikhXQ">{this.props.example.ListItem.oprice}</span></span>
                                <span className="sc-chPdSV eCpHpu" style={{ backgroundColor: 'rgb(255, 70, 78)', borderColor: 'rgb(255, 70, 78)', color: 'rgb(255, 255, 255)' }}>包邮</span>
                            </div>
                            <span className="sc-iRbamj fdvAUU">{this.props.example.ListItem.bottomTexts?this.props.example.ListItem.bottomTexts.rightText:1}</span>
                        </div>
                        {/* <div className="sc-gPEVay ckWRct">
                            到手价：132.05元 （省6.95元）
    </div> */}
                        <div className="sc-kkGfuU gnqCN" data-zerobuy="false">
                            <p className="sc-iAyFgw eiWZln">{this.props.example.ListItem.title_long}</p>
                            <button className="AddFav sc-hMqMXs djnbop" />
                        </div>
                    </div>
                </section>
                <div className="sc-drlKqa hoFmJx">
                    <div className="sc-dVhcbM dQnXyl">
                        <p className="sc-eqIVtm dDeMti"><span className="sc-kAzzGY iXUUuH" style={{ marginRight: '0.341333rem' }}>满件折</span><span className="sc-fAjcbJ byigni">满1件9.5折,满2件8.5折</span></p>
                        <img className="sc-caSCKo kclDrl" type="dot" src="https://web.juanpi.com/static/media/more.66830346.png" />
                    </div>
                    <div className="sc-gldTML fNYoVS">
                        <p className="sc-feryYK kZCgYS"><span className="sc-cJOK evvHOT">24小时发货</span><span className="sc-cJOK evvHOT">7天包退</span><span className="sc-cJOK evvHOT">售后补贴</span></p>
                        <img className="sc-ccSCjj glmRdv" src="https://web.juanpi.com/static/media/more.66830346.png" />
                    </div>
                </div>

                <div className="sc-drlKqa hoFmJx">
                    <div className="sc-gisBJw beBVBG">
                        <p className="sc-kjoXOD gSaRQX">已选择： 紫色 Xl</p>
                        <img className="sc-cHGsZl wstDz" src="https://web.juanpi.com/static/media/arrow_right.ddbb0258.png" />
                    </div>
                </div>
                <div class="sc-drlKqa hoFmJx">
                    <div>
                        <div>
                            <div className="sc-RefOD gHyDBV">
                                <div className="sc-iQKALj iWGNAQ">
                                    <img className="sc-bwCtUz iwQlpP" src="https://goods1.juancdn.com/bao/170314/1/f/58c7b852a43d1f3ad335c2c2_180x90.png?iopcmd=convert&Q=88&dst=png" />
                                </div>
                                <div className="sc-hrWEMg ewzTJI">
                                    <div className="sc-eTuwsz eAUfqE">
                                        秀丽美女装小店
        </div>
                                    <div className="sc-gwVKww WySNi">
                                        共156件商品
        </div>
                                </div>
                                <div>
                                    <a className="sc-hXRMBi dsGqKv"><span className="sc-epnACN ebsHjU">进入店铺</span><img className="sc-iQNlJl efcxPt" src="https://web.juanpi.com/static/media/arrow_right.ddbb0258.png" /></a>
                                </div>
                            </div>
                        </div>
                        &gt;
</div>
</div >
                </div >
                )
            }
        
        })
