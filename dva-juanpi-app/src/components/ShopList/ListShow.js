import React, { Component } from 'react';
import { connect } from 'dva'
import { Link } from 'dva/router'
import './ListShow.css'
export default connect((state) => {
    return state
})(class ListShow extends Component {

    // getTitles() {
    //     this.props.dispatch({
    //         type: 'barTitle/getTitle',
    //         payload: {
    //             userName: 'zhoujunsen'
    //         }
    //     })
    // }
    render() {
        console.log(this)
        return (
            <div className="list-right" style={{ height: '1281.38px' }}>
                <div id="wraper">
                    <div className="third-cate" style={{ transitionTimingFunction: 'cubic-bezier(0.1, 0.57, 0.1, 1)', transitionDuration: '0ms', transform: 'translate(0px, 0px) translateZ(0px)' }}>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/59" cid={59} className="bc" data-bc="1_243_1_59" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/170502/3/2/5908496ca43d1f7f665137b7_200x200.png?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>T恤</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/1278" cid={1278} className="bc" data-bc="1_243_2_1278" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190528/4/d/5cecb17433b089435d52d0ab_200x200.png?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>女士裙装</span></a>
                            <div className="icon-new icon">
                                NEW
        </div>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/1280" cid={1280} className="bc" data-bc="1_243_3_1280" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190527/f/b/5cebb63333b08946b820e6dc_200x200.png?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>衬衫雪纺</span></a>
                            <div className="icon-hot icon">
                                HOT
        </div>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/261" cid={261} className="bc" data-bc="1_243_4_261" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/180510/f/6/5af4305c33b08974b25d97c5_200x200.png?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>休闲裤</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/2109" cid={2109} className="bc" data-bc="1_243_5_2109" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190527/5/f/5cebb8a233b0893ffe22ca3e_200x200.png?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>女士外套</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/256" cid={256} className="bc" data-bc="1_243_6_256" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190219/f/d/5c6b8188b6f8ea14bc1d2890_200x200.jpg?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>懒人套装</span></a>
                            <div className="icon-hot icon">
                                HOT
        </div>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/251" cid={251} className="bc" data-bc="1_243_7_251" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190527/6/d/5cebb52fb6f8ea5b1578f11d_200x200.png?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>针织衫</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/263" cid={263} className="bc" data-bc="1_243_8_263" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190528/9/9/5cecafac33b08944cb03644c_200x200.png?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>连体/背带裤</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/1283" cid={1283} className="bc" data-bc="1_243_9_1283" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190220/0/6/5c6cd4b933b08976b41fa2a2_200x200.jpg?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>西装外套</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/2108" cid={2108} className="bc" data-bc="1_243_10_2108" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190220/5/b/5c6cd61633b089196459057c_200x200.jpg?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>风衣</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/1279" cid={1279} className="bc" data-bc="1_243_11_1279" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190220/3/8/5c6cd6c7b6f8ea24e1776e46_200x200.jpg?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>冬季外套</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/1281" cid={1281} className="bc" data-bc="1_243_12_1281" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190220/a/e/5c6cd52833b089139a429f3d_200x200.jpg?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>卫衣</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/3314" cid={3314} className="bc" data-bc="1_243_13_3314" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/190220/d/a/5c6cda8233b0891a8c2ff71a_200x200.jpg?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>中老年女装</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/262" cid={262} className="bc" data-bc="1_243_14_262" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/180517/b/0/5afd2b2133b08909906c57af_200x200.png?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>牛仔裤</span></a>
                        </div>
                        <div className="cate-second" style={{ width: '83.24px' }}>
                            <a href="//m.juanpi.com/cate/1606" cid={1606} className="bc" data-bc="1_243_15_1606" style={{ background: 'none' }}><img src="//s2.juancdn.com/bao/181106/4/a/5be163f1b6f8ea61f7712835_200x200.png?iopcmd=convert&dst=webp" className="cate-img lazy loaded" /><span>职业套装</span></a>
                        </div>
                        <div className="cate-bottom" />
                    </div>
                </div>
            </div>

        )
    }


})