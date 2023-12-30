import { Button, View } from '@tarojs/components';

import { useRouter } from '@/hooks';

definePageConfig({
  navigationBarTitleText: '1111',
});

export default function Index() {
  const { switchTab } = useRouter();
  const handleGo = () => {
    switchTab({
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
