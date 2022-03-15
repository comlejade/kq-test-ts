import React from 'react';
import {View} from "@remax/wechat";
import useStore from '@/store';
import {usePageEvent} from "remax/macro";

const Test = () => {

  const { locationStore } = useStore();


  usePageEvent('onLoad', () => {
    locationStore.setStoreId(2)
  })
  return (
    <View>新页面</View>
  )
}

export default Test;
