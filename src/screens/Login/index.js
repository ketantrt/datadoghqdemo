/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import BigList from 'react-native-big-list';
import {FlashList} from '@shopify/flash-list';

import {AnimalListPlaceholder} from '@components';

export const Login = ({
  isReversed,
  shimmerColors,
  hasData,
  hasBorder,
  randomWidth,
}) => {
  const [dogList, setDogList] = useState([]);
  const [visible, setVisible] = React.useState(false);
  const [avatarVisible, setAvatarVisible] = React.useState(false);

  useEffect(() => {
    fetchData();
    hasData && setVisible(true);
  }, []);

  const fetchData = async () => {
    const resp = await fetch('https://api.thedogapi.com/v1/breeds');
    const data = await resp.json();

    setTimeout(() => {
      setDogList(data);
    }, 2000);
  };

  return (
    <>
      {dogList.length > 0 ? (
        <>
          <FlashList
            data={dogList}
            renderItem={({item}) => {
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 10,
                      borderWidth: 1,
                    }}>
                    <Image
                      style={{height: 75, width: 100, flex: 2}}
                      source={{
                        uri:
                          item?.image?.url ??
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJgwdOAjqaZGS7kn35IVm_ZN6E4XFuJ7V_g&usqp=CAU',
                        cache: 'force-cache',
                      }}
                    />
                    <Text style={{color: 'black', flex: 8, paddingLeft: 20}}>
                      {item.name}
                    </Text>
                  </View>
                </>
              );
            }}
            estimatedItemSize={200}
          />
          {/* <BigList
            itemHeight={90}
            data={dogList}
            renderItem={({item}) => {
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 10,
                      borderWidth: 1,
                    }}>
                    <Image
                      style={{height: 75, width: 100, flex: 2}}
                      source={{
                        uri:
                          item?.image?.url ??
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJgwdOAjqaZGS7kn35IVm_ZN6E4XFuJ7V_g&usqp=CAU',
                        cache: 'force-cache',
                      }}
                    />
                    <Text style={{color: 'black', flex: 8, paddingLeft: 20}}>
                      {item.name}
                    </Text>
                  </View>
                </>
              );
            }}
          /> */}
        </>
      ) : (
        <>
          <AnimalListPlaceholder />
          <AnimalListPlaceholder />
          <AnimalListPlaceholder />
          <AnimalListPlaceholder />
          <AnimalListPlaceholder />
          <AnimalListPlaceholder />
          <AnimalListPlaceholder />
          <AnimalListPlaceholder />
        </>
      )}
    </>
  );
};
