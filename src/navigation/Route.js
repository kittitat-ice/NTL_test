import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import SetCountScreen from '../screens/SetCount';

const Routes = ({isLogin, dispatch}) => {

  const LoginStack = createStackNavigator();

  const Login = () => (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );

  const MainStack = createStackNavigator();

  const Main = () => (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="SetCount" component={SetCountScreen} />
    </MainStack.Navigator>
  );

  return (
    <NavigationContainer>{isLogin ? <Main /> : <Login />}</NavigationContainer>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.main.isLogin,
});

export default connect(mapStateToProps)(Routes);
