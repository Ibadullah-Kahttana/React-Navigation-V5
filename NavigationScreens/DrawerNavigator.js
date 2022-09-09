import 'react-native-gesture-handler';

import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './Components/HomeScreen';
import ListScreen from './Components/ListScreen';
import ProfileScreen from './Components/ProfileScreen';
import Task1UI from './screens/Task1UI';
import RootScreen from './screens/RootScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Task1Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const RootScreenStack = ({navigation}) => (
  <RootStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#009387'},
      headerTintColor: '#fff',
      headerTitleStyke: {
        fontWeight: 'bold',
      },
    }}>
    <RootStack.Screen
      name="RootScreen"
      component={RootScreen}
      options={{
        title: 'Root Screen',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon type="entypo" name="menu" size={25} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </RootStack.Navigator>
);

const HomeScreenStack = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#009387'},
      headerTintColor: '#fff',
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
      headerStyle: {backgroundColor: '#009387'},
      headerTintColor: '#fff',
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
      headerStyle: {backgroundColor: '#009387'},
      headerTintColor: '#fff',
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
      headerStyle: {backgroundColor: '#009387'},
      headerTintColor: '#fff',
      headerTitleStyke: {
        fontWeight: 'bold',
      },
    }}>
    <ListStack.Screen
      name="Task1"
      component={Task1UI}
      options={{
        title: 'Task 1 Screen',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon type="entypo" name="menu" size={25} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </Task1Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="RootScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="RootScreen" component={RootScreenStack} />
        <Drawer.Screen name="Task1" component={Task1ScreenStack} />
        <Drawer.Screen name="HomeScreen" component={HomeScreenStack} />
        <Drawer.Screen name="ListScreen" component={ListScreenStack} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
