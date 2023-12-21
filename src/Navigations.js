import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppColors } from './Colors';
import Login from './Screens/Login';
import TimeLine from './Screens/TimeLine';
import Search from './Screens/Search';
import Profile from './Screens/Profile';
import AddPost from './Screens/AddPost';
import RecentActivity from './Screens/RecentActivity';
import ShortVideos from './Screens/ShortVideos';
import Message from './Screens/Message';
import Status from './Commons/Status';
import { useSelector } from 'react-redux';
import TextToSpeach from './Screens/TextToSpeach';


const Stack = createNativeStackNavigator();
const Navigations = () => {

    const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
    const defaultTextColor = useSelector((state) => state.background.defaultTextColor);
    const backgroundColor = useSelector((state) => state.background.color);

    React.useEffect(() => {
        setTimeout(() => {
            setHideSplashScreen(true);
        }, 1000);
    }, []);

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={backgroundColor} barStyle={defaultTextColor === 'black' ? "dark-content" : "light-content"} />
            {hideSplashScreen ? (
                <Stack.Navigator screenOptions={{ headerShown: false, animationTypeForReplace: 'push', animationDuration: 500, animation: 'ios' }}>
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
                    <Stack.Screen
                        name="TextToSpeach"
                        component={TextToSpeach}
                        options={{ headerShown: false }}
                    />


                </Stack.Navigator>
            ) : (
                <Login />
            )}
        </NavigationContainer>
    )
}

export default Navigations

const styles = StyleSheet.create({})