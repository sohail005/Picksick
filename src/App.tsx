const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity, StatusBar } from "react-native";
import Login from "./Screens/Login";
import TimeLine from "./Screens/TimeLine";
import Search from "./Screens/Search";
import AddPost from "./Screens/AddPost";
import Profile from "./Screens/Profile";
import Message from "./Screens/Message";
import RecentActivity from "./Screens/RecentActivity";
import ShortVideos from "./Screens/ShortVideos";
import { AppColors } from "./Colors";
import Status from "./Commons/Status";

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
        <StatusBar backgroundColor={AppColors.whiteText} barStyle={"dark-content"} />
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false, animationTypeForReplace: 'push', animationDuration: 800, animation: 'ios' }}>
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
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddPost"
              component={AddPost}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecentActivity"
              component={RecentActivity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Message"
              component={Message}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShortVideos"
              component={ShortVideos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Status"
              component={Status}
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
