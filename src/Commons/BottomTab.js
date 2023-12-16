import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withDelay
} from 'react-native-reanimated';
import { AppColors } from '../Colors';
import { useNavigation } from '@react-navigation/native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import LinearGradient from 'react-native-linear-gradient';
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity)
const BottomTab = ({ navigation,screen }) => {
    const { height, width } = useWindowDimensions();
   // const navigation = useNavigation()
    const selected = screen;
    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    const [color1, setColor1] = useState('gray');
    const [color2, setColor2] = useState('gray');
    const [color3, setColor3] = useState('gray');
    const [color4, setColor4] = useState('gray');
    const [color5, setColor5] = useState('gray');

    const animatedX = useSharedValue(0);
    const animatedY = useSharedValue(0);

    //For Button
    const animatedBtn1Y = useSharedValue(0);
    const animatedBtn2Y = useSharedValue(0);
    const animatedBtn3Y = useSharedValue(0);
    const animatedBtn4Y = useSharedValue(0);
    const animatedBtn5Y = useSharedValue(0);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false)
        }, 3000);
        if (selected == 0) {
            setColor2('gray')
            setColor4('gray')
            setColor3('gray')
            setColor5('gray')
            animatedY.value = withTiming(50, { duration: 200 });
            setTimeout(() => {
                animatedX.value = withTiming(-10, { duration: 200 });
            }, 200);
            setTimeout(() => {
                animatedBtn1Y.value = withTiming(-80, { duration: 200 })
                animatedY.value = withDelay(100, withTiming(-100, { duration: 200 }))
                setTimeout(() => {
                    animatedY.value = withTiming(0, { duration: 200 });
                    animatedBtn1Y.value = withTiming(0, { duration: 200 })
                    setTimeout(() => {
                        setColor1('white')
                        showMenu()
                    }, 200);
                }, 200);
            }, 200);
        } else if (selected == 1) {
            setColor1('gray')
            setColor3('gray')
            setColor4('gray')
            setColor5('gray')
            animatedY.value = withTiming(50, { duration: 200 });
            setTimeout(() => {
                animatedX.value = withTiming(width / 5 - 10, { duration: 200 });
            }, 200);
            setTimeout(() => {
                animatedBtn2Y.value = withTiming(-80, { duration: 200 })
                animatedY.value = withDelay(100, withTiming(-100, { duration: 200 }))
                setTimeout(() => {
                    animatedY.value = withTiming(0, { duration: 200 });
                    animatedBtn2Y.value = withTiming(0, { duration: 200 })
                    setTimeout(() => {
                        setColor2('white')
                    }, 200);
                }, 200);
            }, 200);
        } else if (selected == 2) {
            setColor2('gray')
            setColor1('gray')
            setColor4('gray')
            setColor5('gray')
            animatedY.value = withTiming(50, { duration: 200 });
            setTimeout(() => {
                animatedX.value = withTiming(width / 2.5 - 10, { duration: 200 });
            }, 200);
            setTimeout(() => {
                animatedBtn3Y.value = withTiming(-80, { duration: 200 })
                animatedY.value = withDelay(100, withTiming(-100, { duration: 200 }))
                setTimeout(() => {
                    animatedY.value = withTiming(0, { duration: 200 });
                    animatedBtn3Y.value = withTiming(0, { duration: 200 })
                    setTimeout(() => {
                        setColor3('white')
                    }, 200);
                }, 200);
            }, 200);
        } else if (selected == 3) {
            setColor2('gray')
            setColor1('gray')
            setColor3('gray')
            setColor5('gray')
            animatedY.value = withTiming(50, { duration: 200 });
            setTimeout(() => {
                animatedX.value = withTiming(width / 1.6 - 22, { duration: 200 });
            }, 200);
            setTimeout(() => {
                animatedBtn4Y.value = withTiming(-80, { duration: 200 })
                animatedY.value = withDelay(100, withTiming(-100, { duration: 200 }))
                setTimeout(() => {
                    animatedY.value = withTiming(0, { duration: 200 });
                    animatedBtn4Y.value = withTiming(0, { duration: 200 })
                    setTimeout(() => {
                        setColor4('white')
                    }, 200);
                }, 200);
            }, 200);
        } else {
            setColor2('gray')
            setColor1('gray')
            setColor3('gray')
            setColor4('gray')
            animatedY.value = withTiming(50, { duration: 200 });
            setTimeout(() => {
                animatedX.value = withTiming(width / 1.2 - 26, { duration: 200 });
            }, 200);
            setTimeout(() => {
                animatedBtn5Y.value = withTiming(-80, { duration: 200 })
                animatedY.value = withDelay(100, withTiming(-100, { duration: 200 }))
                setTimeout(() => {
                    animatedY.value = withTiming(0, { duration: 200 });
                    animatedBtn5Y.value = withTiming(0, { duration: 200 })
                    setTimeout(() => {
                        setColor5('white')
                    }, 200);
                }, 200);
            }, 200);
        }
    }, [selected])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: animatedX.value },
                { translateY: animatedY.value }
            ]
        }
    })
    const animatedBtn1Style = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: animatedBtn1Y.value }
            ]
        }
    })
    const animatedBtn2Style = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: animatedBtn2Y.value }
            ]
        }
    })
    const animatedBtn3Style = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: animatedBtn3Y.value }
            ]
        }
    })
    const animatedBtn4Style = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: animatedBtn4Y.value }
            ]
        }
    })
    const animatedBtn5Style = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: animatedBtn5Y.value }
            ]
        }
    })


    return (
        <View style={styles.constiner}>
            <Animated.View style={[styles.movingView, animatedStyle]}></Animated.View>
            <AnimatedBtn style={[styles.btn, animatedBtn1Style]} onPress={() => navigation.navigate('TimeLine')}>
                <Image resizeMode='contain' source={require('../Assets/home1.png')} style={{ width: 30, height: 30, borderRadius: 10, tintColor: color1 }} />
            </AnimatedBtn>
            <AnimatedBtn style={[styles.btn, animatedBtn2Style]} onPress={() => navigation.navigate('Search')}>
                <Image resizeMode='contain' source={require('../Assets/search.png')} style={{ width: 26, height: 26, borderRadius: 10, tintColor: color2 }} />
            </AnimatedBtn>
            <AnimatedBtn style={[styles.btn, animatedBtn3Style]} onPress={() => navigation.navigate('ShortVideos')}>
                <Image resizeMode='contain' source={require('../Assets/play-button.png')} style={{ width: 26, height: 26, borderRadius: 10, tintColor: color3 }} />
            </AnimatedBtn>
            
            <AnimatedBtn style={[styles.btn, animatedBtn4Style]} onPress={() => navigation.navigate('AddPost')}>
                    <Image resizeMode='contain' source={require('../Assets/add.png')} style={{ width: 28, height: 28, borderRadius: 10, tintColor: color4 }} />
                </AnimatedBtn>
            <AnimatedBtn style={[styles.btn, animatedBtn5Style]} onPress={() => navigation.navigate('Profile')}>
                <Image resizeMode='cover' source={{uri:'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png'}} style={{ width: 26, height: 30, borderRadius: 10 }} />
            </AnimatedBtn>

        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    constiner: {
        height: 55,
        // width: '100%',
        alignItems: 'center',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: AppColors.backgroundColor,
        bottom: 0,
        borderTopWidth:1,
    },
    movingView: {
        backgroundColor: AppColors.pinkColor, //'#00A8AA',//'#008080',
        width: 50,
        height: 50,
        borderRadius: 20,
        position: 'absolute',
        marginVertical: 5,
        elevation: 10, shadowColor: 'white', shadowOpacity: 0.5, shadowRadius: 3
    },
    btn: {
       
    }
})