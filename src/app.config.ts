export default defineAppConfig({
  pages: ['pages/index/index', 'pages/demo1/index', 'pages/demo2/index'],
  subpackages: [
    {
      root: 'packageA',
      pages: ['pages/apple/index'],
    },
    {
      root: 'packageB',
      name: 'pack2',
      pages: ['pages/dog/index'],
    },
  ],
  tabBar: {
    color: '#666666',
    selectedColor: '#4965f2',
    backgroundColor: '#fefefe',
    list: [
      {
        text: 'demo1',
        pagePath: 'pages/demo1/index',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home-selected.png',
      },
      {
        text: 'demo2',
        pagePath: 'pages/demo2/index',
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
