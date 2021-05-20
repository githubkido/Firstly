import React from 'react';
import Login from './screen/Login'
import Register from './screen/Register'
import HomeScreen from './screen/Home'
import Notification from './screen/Notification'
import AccountScreen from './screen/Account'
import NewsPage from './screen/NewsPage'
import CheckTheUser from './screen/CheckTheUser'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
const footerStack = createBottomTabNavigator();
const noNavStack = createStackNavigator();
 
//stack for login and sigup page and the reqirection from this stack 
// is in login.js
const LoginPageStack = () => {
  return (
    <noNavStack.Navigator screenOptions={{
      headerShown: false
    }}>
    <noNavStack.Screen name='check' component={CheckTheUser} />
      <noNavStack.Screen name="Login" component={Login} />
      <noNavStack.Screen name='Register' component={Register} />
    </noNavStack.Navigator>
  )
}

const HomeScreenStack = () => {
  return (
    <noNavStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <noNavStack.Screen name='Home' component={HomeScreen} />
      <noNavStack.Screen name='NewsCard' component={NewsPage} />
    </noNavStack.Navigator>
  )
}

//homepagestack is the full stack for the app where all the compo
// load in the screen after user login in the app
const HomePageStack = () => {
  return (
    <footerStack.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Notification') {
          iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
        } else if (route.name === 'Like') {
          iconName = focused ? 'bookmark' : 'bookmark-outline';
        } else if (route.name === 'Account') {
          iconName = focused ? 'person-circle' : 'person-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={24} color={color} />;
      },
    })} tabBarOptions={{
      activeTintColor: '#ffffff',
      inactiveTintColor: 'grey',
      showLabel: false,
      style: { backgroundColor: '#111820' }
    }}>
      <footerStack.Screen name='Home' component={HomeScreenStack} />
      <footerStack.Screen name='Notification' component={Notification} />
      <footerStack.Screen name='Like' component={HomeScreen} />
      <footerStack.Screen name='Account' component={AccountScreen} />
    </footerStack.Navigator>
  )

}

function App() {
  return (
    <NavigationContainer>
      <noNavStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <noNavStack.Screen name='form' component={LoginPageStack} />
        <noNavStack.Screen name='Home' component={HomePageStack} />
      </noNavStack.Navigator>
    </NavigationContainer>
  );
}

export default App;