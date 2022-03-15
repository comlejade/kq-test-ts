import React, {useEffect, useRef, useState} from 'react';
import { View, ScrollView } from 'remax/wechat';
import { Native } from "@kqinfo/ui";

import styles from './tabs.less'
import {NativeInstance} from "@kqinfo/ui/es/native";
import {usePageEvent} from "remax/macro";

const Tabs: React.FC = (props) => {
  const { children } = props;
  const childrenCount = React.Children.count(children)
  const headRefs = useRef<(NativeInstance | null)[]>([]);
  headRefs.current = [];
  const ctnRefs = useRef<(NativeInstance | null)[]>([]);
  ctnRefs.current = [];
  const activeRef = useRef(0);
  
  let w = 0

  if (childrenCount <= 4 && childrenCount > 0) {
    w = 100 / childrenCount
  } else {
    w = 23
  }

  const handleChange = (index: number) => {
    console.log(activeRef.current)
    if (index === activeRef.current) return;
    headRefs.current[index]?.setData({
      className: `${styles.svItem} ${styles.active}`,
      style:  `width: ${w}vw`
    })
    headRefs.current[activeRef.current]?.setData({
      className: `${styles.svItem}`,
      style:  `width: ${w}vw`
    })
    ctnRefs.current[index]?.setData({
      visible: true
    })
    ctnRefs.current[activeRef.current]?.setData({
      visible: false
    })
    activeRef.current = index;
  }

  return (
    <View>
      <View className={styles.header}>
        <ScrollView className={styles.sv} scrollX={true}>
          <View className={styles.svWrap}>
            {
              React.Children.map(children, (child, index) => {
                return (
                  <Native
                    key={`tab-header-${index}`}
                    ref={ref => {
                      // console.log('ref -> ', ref)
                      return headRefs.current[index] = ref
                    }}
                    initData={{
                      className: `${styles.svItem} ${index === 0 && styles.active}`,
                      style:  `width: ${w}vw`
                    }}
                    onTap={() => handleChange(index)}
                  >
                    <View className={styles.title}>
                      {(child as React.ReactElement).props.title}
                    </View>
                    <View className={styles.subTitle}>
                      {(child as React.ReactElement).props.subTitle}
                    </View>
                  </Native>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
      <View>
        {
          React.Children.map(children, (child, index) => {
            return (
              <Native
                ref={ref => ctnRefs.current[index] = ref}
                key={`tab-body-${index}`}
                initData={{
                  visible: index === 0
                }}
              >{(child as React.ReactElement).props.children}</Native>
            )
          })
        }
      </View>
    </View>
  )
}

export default Tabs