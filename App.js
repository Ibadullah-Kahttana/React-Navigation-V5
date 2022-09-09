import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';

import {DrawerContent} from './screens/DrawerContent';
import RootScreen from './screens/RootScreen';
import RootStackScreen from './screens/RootStackScreen';
import {AuthContext} from './Components/context';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, password) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        // const userToken = String(foundUser[0].userToken);
        // const userName = foundUser[0].username;

        let userToken;
        userToken = null;
        if (userName == 'user' && password == 'pass') {
          try {
            userToken = 'dfgdf';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
        }

        // console.log('user token: ', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },

      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },

      signUp: () => {
        setUserToken('fgkj');
        setIsLoading(false);
      },

      // toggleTheme: () => {
      //   setIsDarkTheme(isDarkTheme => !isDarkTheme);
      // },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      //setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      //      console.log('user token: ', userToken);

      dispatch({type: 'REGISTER', token: userToken});
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            initialRouteName="RootScreen"
            screenOptions={{
              headerShown: false,
            }}
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="RootScreen" component={RootScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
