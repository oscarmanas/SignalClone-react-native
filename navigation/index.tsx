/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Text, View, Image, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import chatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen 
        name="ChatRoom" 
        component={chatRoomScreen}
        options={{ headerTitle: ChatRoomHeader,
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {

  const {width} = useWindowDimensions();

  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      width,
      padding: 2,
      alignItems: 'center',
      
    }}>
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}} 
        style = {{ width: 30, height: 30, borderRadius: 30}}  
      />
      <Text style={{flex: 1, textAlign: 'center', marginRight: 135, fontWeight: 'bold', color:'black', fontSize: 20}}>Signal</Text>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <Feather name="camera" size={24} color="black" style={{marginHorizontal: 10}}  />
        <Feather name="edit-2" size={24} color="black" style={{marginHorizontal: 10}} />
      </View>
    </View>
  )
}

const ChatRoomHeader = (props) => {

  const {width} = useWindowDimensions();
  console.log(props)

  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      width: width - 30,
      marginLeft: -25,
      padding: 2,
      alignItems: 'center',
      
    }}>
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}} 
        style = {{ width: 30, height: 30, borderRadius: 30}}  
      />
      <Text style={{flex: 1, textAlign: 'center', marginRight: 100, fontWeight: 'bold', color:'black', fontSize: 15}}>{props.children}</Text>
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <Feather name="camera" size={24} color="black" style={{marginHorizontal: 10}}  />
        <Feather name="edit-2" size={24} color="black" style={{marginHorizontal: 10}} />
      </View>
    </View>
  )
}