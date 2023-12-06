import { Button, View } from '@tarojs/components';

definePageConfig({
  navigationBarTitleText: '1111',
});

export default function Index() {
  return (
    <View>
      <Button plain type="primary">
        Go Home
      </Button>
    </View>
  );
}
