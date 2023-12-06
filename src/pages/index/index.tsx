import { Button, View } from '@tarojs/components';
import Taro from '@tarojs/taro';

definePageConfig({
  navigationBarTitleText: '1111',
});

export default function Index() {
  const handleGo = () => {
    Taro.navigateTo({
      url: '/pages/demo1/index',
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
