import { Button, View } from '@tarojs/components';

import { AtButton } from 'taro-ui';
import { useRouter } from '@/hooks';

definePageConfig({
  navigationBarTitleText: '1111',
});

export default function Index() {
  const { switchTab } = useRouter();
  const handleGo = () => {
    switchTab('/pages/demo1/index');
  };
  return (
    <View>
      <AtButton type="primary">123</AtButton>

      <Button plain type="primary" onClick={handleGo}>
        Go Home
      </Button>
    </View>
  );
}
