import React from 'react';
import { connect } from 'dva';
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import Carousel from '../../components/Carousel/Carousel'
import Main from '../../components/Main/Main'
import MainX from '../../components/Main/MainX'
import Content from '../../components/Content/Content'
import Tabbar from '../../components/Tabbar/Tabbar'
import LoginMore from '../../components/LoginMore/LoginMore'
function IndexPage() {
  return (
    <div>
        <Header />
        <Search />
        <Carousel />
        <Main />
        <MainX />
        <Content />
        <Tabbar />
        <LoginMore />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);