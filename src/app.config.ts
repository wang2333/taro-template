export default defineAppConfig({
  pages: ['pages/index/index', 'pages/demo1/index'],
  tabBar: {
    color: '#666666',
    selectedColor: '#4965f2',
    backgroundColor: '#fefefe',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home-selected.png',
      },
      {
        text: 'demo1',
        pagePath: 'pages/demo1/index',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home-selected.png',
      },
    ],
  },
  animation: true,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
