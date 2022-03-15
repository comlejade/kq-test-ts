import React from 'react';
import { View } from '@remax/wechat';

interface ITabProps {
  title: string;
  subTitle: string;
}

const Tab: React.FC<ITabProps> = (props) => {
  const { children } = props;
  return (
    <View>
      {children}
    </View>
  )
}

export default Tab