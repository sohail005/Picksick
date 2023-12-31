import { ActivityIndicator, FlatList, Image, RefreshControl, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Header from '../Commons/Header';
import { AppColors } from '../Colors';
import Swiper from 'react-native-swiper';
import BottomTab from '../Commons/BottomTab';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import * as Animatable from 'react-native-animatable';
import Stories from '../Commons/Stories';
import { useSelector } from 'react-redux';
import { languages } from '../Commons/MultiLaguage';
import { AppText } from '../Text';

const posts = [
    {
        id: 0,
        username: 'Sohail.code',
        description: '',
        location: 'Los Angeles',
        postTime: '3h',
        images: [{ id: 0, image: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png' },
        { id: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZHNc5teEcC0sUjjLOVaUq43Gbd2Rn2GoLx1bTbGmO7Bm3r8z4C5eD0rYNy5phyxNuFM&usqp=CAU' }],
        likesCount: '1000',
        commentsCount: '114',
        liked: true,
        profile: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png'
    },
    {
        id: 1,
        username: 'Sohail.code',
        description: '',
        location: 'Los Angeles',
        postTime: '3h',
        images: [{ id: 0, image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion-male-posing-street-background-sunglasses-outdoors-sunset_158538-20630.jpg' },
        { id: 0, image: 'https://img.freepik.com/premium-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelmodern-man-dressed-blue-shirt-fashion-male-posing-street-background-near-skyscrapers-sunglasses_158538-21216.jpg' }],
        likesCount: '1000',
        commentsCount: '114',
        liked: false,
        profile: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png'
    },
    {
        id: 2,
        username: 'Sohail.code',
        description: '',
        location: 'Los Angeles',
        postTime: '3h',
        images: [{ id: 0, image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion-male-posing-street-background-sunglasses-outdoors-sunset_158538-20630.jpg' },
        { id: 0, image: 'https://img.freepik.com/premium-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelmodern-man-dressed-blue-shirt-fashion-male-posing-street-background-near-skyscrapers-sunglasses_158538-21216.jpg' }],
        likesCount: '1000',
        commentsCount: '114',
        liked: false,
        profile: 'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png'
    }
]
const TimeLine = ({ navigation }) => {
    const { height, width, fontScale } = useWindowDimensions();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    const backgroundColor = useSelector((state) => state?.background?.color);
    const defaultTextColor = useSelector((state) => state?.background?.defaultTextColor);
    const appLanguage = useSelector((state) => state.background.language);

    const picksickText = appLanguage == 'HINDI' ? languages[0].Hindi[0].picksick : AppText.AppName;
    const viewallText = appLanguage == 'HINDI' ? languages[0].Hindi[8].viewall : 'View all';
    const commentsText = appLanguage == 'HINDI' ? languages[0].Hindi[9].comments : 'View all';
    const likesText = appLanguage == 'HINDI' ? languages[0].Hindi[7].likes : 'View all';

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>
            <ScrollView
                refreshControl={
                    <RefreshControl colors={[defaultTextColor, AppColors.pinkColor]} progressViewOffset={0.5} tintColor={AppColors.red} refreshing={refreshing} onRefresh={onRefresh} />
                }
                style={{ width: width, backgroundColor: backgroundColor, flex: 1 }}>
                <Header title={picksickText} />

                {/* Story container */}
                <Stories textColor={defaultTextColor} />
                {/* Story container End*/}
                {/* posts started */}
                <View style={{ width: width, alignItems: 'center', backgroundColor: backgroundColor }}>
                    {posts.map((item, index) => {
                        return (
                            <Animatable.View animation="zoomIn" duration={500} delay={index * 200} key={index} style={{ width: width - 30 }}>
                                <View style={[styles.itemContainer, { backgroundColor: backgroundColor, elevation: 10, shadowColor: defaultTextColor }]}>
                                    <View style={styles.itemContainerTop}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={{ uri: item.profile }} style={styles.itemProfileimage} />
                                            <View style={{ left: 5 }}>
                                                <Text style={{ color: defaultTextColor, fontSize: 16 }}>{item.username}</Text>
                                                <Text style={{ color: AppColors.grayText, fontSize: 10 }}>{item.postTime}. {item.location}</Text>
                                            </View>
                                        </View>
                                        <Image source={require('../Assets/dots.png')} resizeMode='contain' style={{ height: 20, width: 30, marginRight: 10, tintColor: defaultTextColor }} />
                                    </View>
                                    <View style={{ width: '100%', height: height / 3.5 }}>
                                        <Swiper loop={false} loadMinimal={true} animated={true}
                                            automaticallyAdjustContentInsets={true}
                                            loadMinimalLoader={<ActivityIndicator color={AppColors.pinkColor} />}
                                            style={{}} showsButtons={false} activeDotColor={AppColors.pinkColor} >
                                            {item.images.map((itemimg) => {
                                                return (
                                                    <View key={itemimg.id} style={{ margin: 12, borderRadius: 15, elevation: 5 }}>
                                                        <Image source={{ uri: itemimg.image }} resizeMode='cover' style={{ width: '100%', height: '100%', borderRadius: 15, }} />
                                                    </View>
                                                )
                                            })
                                            }
                                        </Swiper>
                                    </View>
                                    {/* like and comments control */}
                                    <View style={styles.controlsContainer}>
                                        {item.liked ?
                                            <Image source={require('../Assets/heartred.png')} resizeMode='contain' style={{ height: 25, width: 25 }} />
                                            :
                                            <Image source={require('../Assets/heart.png')} resizeMode='contain' style={{ height: 25, width: 25, tintColor: defaultTextColor }} />
                                        }
                                        <Image source={require('../Assets/speech-bubble.png')} resizeMode='contain' style={{ height: 24, width: 24, tintColor: '#000', tintColor: defaultTextColor }} />
                                        <Image source={require('../Assets/send.png')} resizeMode='contain' style={{ height: 22, width: 22, tintColor: defaultTextColor }} />
                                    </View>
                                    <View style={{ left: 20, margin: 5 }}>
                                        <Text style={{ color: defaultTextColor, fontSize: 12, fontWeight: '700' }}>{item.likesCount} {likesText}</Text>
                                        <Text style={{ color: AppColors.grayText, fontSize: 10, fontWeight: '700' }}>{viewallText} {item.commentsCount} {commentsText}</Text>
                                    </View>

                                </View>
                            </Animatable.View>
                        )
                    })
                    }

                </View>


            </ScrollView>
            <View style={{ width: width }}>
                <BottomTab screen={0} navigation={navigation} />
            </View>
        </View>
    )
}

export default TimeLine

const styles = StyleSheet.create({
    plusiconTop: {
        width: 25, height: 25,
        backgroundColor: AppColors.pinkColor,
        borderRadius: 100,
        bottom: -28,
        alignSelf: 'flex-end',
        left: -15,
        zIndex: 1
    },
    itemContainer: {
        borderRadius: 15,
        margin: 10
    },
    itemProfileimage: {
        width: 50, height: 50,
        borderRadius: 100 / 2,
        margin: 5
    },
    itemContainerTop: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    wrapper: {

    },
    controlsContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'space-around',
        alignItems: 'center'
    }

})