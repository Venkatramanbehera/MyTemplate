import React from 'react';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';

const AuthNavigation = (props: any) => {
  const {Stack} = props;
  return (
    <Stack.Navigator initalRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={() => null}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
