import { Carousel } from 'antd';
import './Carousel.css'
import React from 'react';
import {connect} from 'dva';

const Carousels = () => {
    return (
        <Carousel autoplay>
            <div>
                <h3><img src='https://goods1.juancdn.com/jas/190620/0/1/5d0b274933b08951f510fb72_1080x418.jpg' /></h3>
            </div>
            <div>
            <h3><img src='https://goods8.juancdn.com/jas/190619/e/2/5d0a017933b08972b30b5a9c_1080x418.jpg' /></h3>
            </div>
            <div>
            <h3><img src='https://goods6.juancdn.com/jas/190423/b/7/5cbedba233b0896e9e6352f9_1080x418.jpg' /></h3>
            </div>
            <div>
            <h3><img src='https://goods4.juancdn.com/jas/190618/7/6/5d08813b33b0894dfa1fc791_1080x418.jpg' /></h3>
            </div> 
         </Carousel>
    );

};


Carousels.propTypes = {
};

export default connect()(Carousels);