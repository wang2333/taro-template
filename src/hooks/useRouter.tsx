import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';

type ParamsType = Partial<Record<string, string>>;

export const useRouter = () => {
  const [pageParams, setPageParams] = useState<ParamsType>({});

  useEffect(() => {
    const params = getPageParams();
    if (params) {
      setPageParams(params);
    }
  }, []);

  const goTo = (url: string, params?: ParamsType) => {
    if (params) {
      const p = Object.keys(params).map((key) => `${key}=${params[key]}`);
      url = `${url}?${p.join('&')}`;
    }
    Taro.navigateTo({ url });
  };

  const switchTab = (url: string) => {
    Taro.switchTab({ url });
  };

  const getPageParams = () => {
    const router = Taro.getCurrentInstance().router;
    if (router?.params) {
      return router.params;
    }
  };

  return {
    goTo,
    switchTab,
    pageParams,
  };
};
