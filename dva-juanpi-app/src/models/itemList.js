
export default {

    namespace: 'barTitle',
  
    state: {
      tabbar:[{
        icon: 'http://s2.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png',
        url: '/home',
        title: '首页',
        isBadge: true,
    }, {
        icon: 'http://s2.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png',
        url: '/classify',
        title: '分类',
        isBadge: false,
    }, {
        icon: 'http://s2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png',
        url: '/shopcart',
        title: '购物车',
        isBadge: false,
    }, {
        icon: 'http://s2.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png',
        url: '/my',
        title: '我的卷皮',
        isBadge: false,
    }],
    userName:'1',
    toggle:'hide'
    },
  
    reducers: {
      getTitle(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };