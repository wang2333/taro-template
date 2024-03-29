import { useLaunch } from '@tarojs/taro';

import 'uno.css';

import { PropsWithChildren } from 'react';

import './app.scss';

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log('App launched.');
  });

  // children 是将要会渲染的页面
  return <>{children}</>;
}

export default App;
