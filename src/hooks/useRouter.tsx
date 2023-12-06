import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';

type ParamsType = Record<string, string>;
type RouteInfo = {
  url: string;
  params: ParamsType;
};

export const useRouter = () => {
  const [pageParams, setPageParams] = useState<RouteInfo['params']>({});

  useEffect(() => {
    const params = getPageParams();
    setPageParams(params as ParamsType);
  }, []);

  const goTo = ({ url, params }: RouteInfo) => {
    const p = Object.keys(params).map((key) => `${key}=${params[key]}`);
    Taro.navigateTo({
      url: `${url}?${p.join('&')}`,
    });
  };

  const getPageParams = () => {
    return Taro.getCurrentInstance().router?.params;
  };

  return {
    goTo,
    pageParams,
  };
};
