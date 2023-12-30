import { useEffect } from 'react';
import { Text, View } from '@tarojs/components';
import { Button } from '@antmjs/vantui';

import { useRouter } from '@/hooks';
import { add } from '@/service/demo';

definePageConfig({
  navigationBarTitleText: 'demo2',
});

export default function FontSize() {
  const { pageParams } = useRouter();
  console.log('👻 ~ pageParams:', pageParams);
  useEffect(() => {
    add().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <View className="p-4">
      12321
      <Button type="danger" size="small">
        主要按钮
      </Button>
      <Text className="p-8">000</Text>
      <View className="text-2xl text-center my-3">font-size</View>
      <View className="text-xs">text-xs</View>
      <View className="text-sm">text-sm</View>
      <View className="text-base">text-base</View>
      <View className="text-lg">text-lg</View>
      <View className="text-40">text-40</View>
      <View className="text-xl">text-xl</View>
      <View className="text-2xl">text-2xl</View>
      <View className="text-3xl">text-3xl</View>
      <View className="text-4xl">text-4xl</View>
      <View className="text-5xl">text-5xl</View>
      <View className="text-6xl">text-6xl</View>
      <View className="text-7xl">text-7xl</View>
      <View className="text-8xl">text-8xl</View>
    </View>
  );
}
