/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {View, Animated} from 'react-native';
import React from 'react';

import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {LinearGradient} from 'rnx-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const AnimalListPlaceholder = () => {
  // Handle animation
  const avatarRef = React.createRef();
  const firstLineRef = React.createRef();
  const secondLineRef = React.createRef();
  const thirdLineRef = React.createRef();

  React.useEffect(() => {
    const facebookAnimated = Animated.stagger(400, [
      avatarRef.current.getAnimated(),
      Animated.parallel([
        firstLineRef.current.getAnimated(),
        secondLineRef.current.getAnimated(),
        thirdLineRef.current.getAnimated(),
      ]),
    ]);
    Animated.loop(facebookAnimated).start();
  }, []);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
      <ShimmerPlaceholder
        duration={3000}
        ref={avatarRef}
        style={{
          width: 74,
          height: 74,
          borderRadius: 74 / 2,
        }}
        stopAutoRun
      />
      <View style={{justifyContent: 'space-between', flex: 8}}>
        <ShimmerPlaceholder
          duration={3000}
          ref={firstLineRef}
          style={{marginBottom: 10, marginLeft: 30}}
          stopAutoRun
        />
        <ShimmerPlaceholder
          duration={3000}
          style={{marginBottom: 10, marginLeft: 30}}
          ref={secondLineRef}
          stopAutoRun
        />
        <ShimmerPlaceholder
          duration={3000}
          style={{marginBottom: 10, marginLeft: 30}}
          ref={thirdLineRef}
          stopAutoRun
        />
      </View>
    </View>
  );
};
