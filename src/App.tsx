const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Login from "./Screens/Login";
import TimeLine from "./Screens/TimeLine";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false ,animationTypeForReplace:'pop',animationDuration:800,animation:'ios'}}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TimeLine"
              component={TimeLine}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Login />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
