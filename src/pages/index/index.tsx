import React, {useState} from 'react';
import {View} from "@remax/wechat";
import { Button } from '@kqinfo/ui';
import Tabs from '@/components/tabs/tabs';
import Tab from '@/components/tab/tab';
import {usePageEvent} from "remax/macro";

const source = [
  {
    id: 1,
    title: '标题1',
    subTitle: '子标题1'
  },
  {
    id: 2,
    title: '标题2',
    subTitle: '子标题2'
  },
  {
    id: 3,
    title: '标题3',
    subTitle: '子标题3'
  },
]
const Index = () => {
  const [data, setData] = useState(source);
  
  usePageEvent('onShow', () => {
    setData(source);
  })
  
  return (
    <>
      <Button onTap={() => wx.navigateTo({url: '/pages/test/index'})}>点击跳转到新页面</Button>
      <Tabs>
        {
          data.map((item) => (
            <Tab title={item.title} subTitle={item.subTitle} key={item.id}>
              <View>内容 {item.title}</View>
            </Tab>
          ))
        }
      </Tabs>
    </>
  )
}

export default Index;