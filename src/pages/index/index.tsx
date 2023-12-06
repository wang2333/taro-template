import { Button, View } from '@tarojs/components';
import Taro from '@tarojs/taro';

import { useRouter } from '@/hooks';

definePageConfig({
  navigationBarTitleText: '1111',
});

export default function Index() {
  const { goTo } = useRouter();
  const handleGo = () => {
    goTo({
      url: '/pages/demo1/index',
      params: {
        a: '1',
        b: '2',
      },
    });
  };
  return (
    <View>
      <Button plain type="primary" onClick={handleGo}>
        Go Home
      </Button>
    </View>
  );
}
