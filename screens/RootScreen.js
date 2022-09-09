import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Icon} from 'react-native-elements';

import HomeScreen from '../Components/HomeScreen';
import ListScreen from '../Components/ListScreen';
import ProfileScreen from '../Components/ProfileScreen';
import Task1UI from './Task1UI';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Task1Stack = createStackNavigator();

const HomeScreenStack = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#009387'},
      headerTintColor: '#fff',
      headerShown: false,
      headerTitleStyke: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: 'Home Screen',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon type="entypo" name="menu" size={25} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ListScreenStack = ({navigation}) => (
  <ListStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#1f65ff'},
      headerTintColor: '#fff',
      headerShown: false,
      headerTitleStyke: {
        fontWeight: 'bold',
      },
    }}>
    <ListStack.Screen
      name="ListScreen"
      component={ListScreen}
      options={{
        title: 'List Screen',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon type="entypo" name="menu" size={25} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </ListStack.Navigator>
);

const ProfileScreenStack = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#694fad'},
      headerTintColor: '#fff',
      headerShown: false,
      headerTitleStyke: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        title: 'Profile Screen',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon type="entypo" name="menu" size={25} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const Task1ScreenStack = ({navigation}) => (
  <Task1Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#d02860'},
      headerTintColor: '#fff',
      headerShown: false,
      headerTitleStyke: {
        fontWeight: 'bold',
      },
    }}>
    <ListStack.Screen
      name="Task1"
      component={Task1UI}
      options={{
        title: 'Task 1 Screen',
        tabBarColor: 'd02860',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon type="entypo" name="menu" size={25} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </Task1Stack.Navigator>
);

const RootScreen = () => (
  <Tab.Navigator initialRouteName="RootScreen" activeColor="#fff">
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreenStack}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <Icon type="entypo" name="home" size={25} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="ListScreen"
      component={ListScreenStack}
      options={{
        tabBarLabel: 'List',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => (
          <Icon type="entypo" name="menu" size={25} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Task1"
      component={Task1ScreenStack}
      options={{
        tabBarLabel: 'Screen1',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => (
          <Icon type="octicons" name="tasklist" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreenStack}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon type="ant-design" name="profile" size={25} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default RootScreen;
