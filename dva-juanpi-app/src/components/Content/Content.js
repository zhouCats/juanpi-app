import React, { Component } from 'react';
import { connect } from 'dva'
import './Content.css'
import axios from 'axios'
import { Link } from 'dva/router'
export default connect((state) => {
    return state
})(class Content extends Component {
    constructor(props) {
        console.log('-----------constructor-------------')
        super(props)
        this.state = {
            news: [],
            isShow:'hide'
        }

    }
    render() {
        console.log(this    )
        return (
            <div className="sc-jqCOkK bcZFQQ" >
                <div className="goods sc-uJMKN eAzbYJ" id="indexGood">
                    {   //数据渲染
                        this.state.news.map((item, index) => {
                            return (
                                <Link  onClick={
                                  ()=> this.changeData(item)
                                } to={{
                                    pathname: "/detail",
                                    search: `?id=${index}`,
                                }} className="sc-bbmXgH gCgGoL" key={index}>
                                <a className="GoodsLink" >
                                    <div className="sc-gGBfsJ bHohRa">
                                        <div className="sc-jnlKLf bYqRFU">
                                            <img className="sc-fYxtnH idxkID" src={item.pic_url} />
                                            <div className="sc-elJkPf lcVTjL">
                                                <img className="sc-jtRfpW QcHRp" src={item.logo_url} />
                                            </div>
                                        </div>
                                        <div className="sc-tilXH cEQZgN">
                                            <span className="sc-ktHwxA gVLSd">{item.title}</span>
                                        </div>
                                        <div className="sc-cmTdod dFUsnh">
                                            {item.title_long}
                    <p className="sc-kTUwUJ kDoQxf">{item.time_left}</p>
                                        </div>
                                    </div></a>
                            </Link>
                            )
                        })
                    }
                   
                  

                </div>
            </div>




        )
    }
    async loadMore() {
        if(sessionStorage.getItem('shopDetailInfo')){
            const news = JSON.parse(sessionStorage.getItem('shopDetailInfo')) 
            // console.log(news)
            this.setState({
                news
            })
            this.props.dispatch({
                type: 'barTitle/getTitle',
                payload: {
                    toggle:'hide'
                }
            })
        }else{
            this.props.dispatch({
                type: 'barTitle/getTitle',
                payload: {
                    toggle:'show'
                }
            })
            const news = (await axios.get("https://www.easy-mock.com/mock/5cfdf75599e00207ba7da021/example/cats"))
            //    console.log(listItem.data.data.goods[0].title)
            console.log(news.data.data.goods)
            this.setState({
                news: [...news.data.data.goods]
            })
            
            sessionStorage.setItem('shopDetailInfo', JSON.stringify(this.state.news));
            this.props.dispatch({
                type: 'barTitle/getTitle',
                payload: {
                    toggle:'hide'
                }
            })
        }
        
    }
    changeData(item){
        this.props.dispatch({
            type: 'example/ChangeData',
            payload: {
                ListItem:item
            }
        })
    }
    
    componentDidMount() {
        console.log('`````````````componentDidMount```````````````')

        this.loadMore()
    }
})
