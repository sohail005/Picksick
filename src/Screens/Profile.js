import { StyleSheet, Text, View, useWindowDimensions, Image, TouchableOpacity, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomTab from '../Commons/BottomTab';
import { AppColors } from '../Colors';
import LinearGradient from 'react-native-linear-gradient';
import Popover from 'react-native-popover-view';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackgroundColor, changeDefaultTextColor, changeLanguage } from '../Redux/slices/backgroundSlice';
import { languages } from '../Commons/MultiLaguage';

const data = [
    { id: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDcmO22c2BCvZeEI6jctj8o65_W7Q5VDpJJ4CLbyFQgdU3fIDGHweRm34CR5QVgtoFwk&usqp=CAU' },
    { id: 1, image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg' },
    { id: 9, image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg' },
    { id: 8, image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDcmO22c2BCvZeEI6jctj8o65_W7Q5VDpJJ4CLbyFQgdU3fIDGHweRm34CR5QVgtoFwk&usqp=CAU' },
    { id: 3, image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' },
    { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgPZ6g7_YYiFVaaSob7On-O9eWvQJfkmLkl_CkJOHP7pvGijGKq-NqlDVDdZQ8_V22pQ&usqp=CAU' },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDcmO22c2BCvZeEI6jctj8o65_W7Q5VDpJJ4CLbyFQgdU3fIDGHweRm34CR5QVgtoFwk&usqp=CAU' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDcmO22c2BCvZeEI6jctj8o65_W7Q5VDpJJ4CLbyFQgdU3fIDGHweRm34CR5QVgtoFwk&usqp=CAU' },
    { id: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDcmO22c2BCvZeEI6jctj8o65_W7Q5VDpJJ4CLbyFQgdU3fIDGHweRm34CR5QVgtoFwk&usqp=CAU' },
]
const FolowersData = [
    { id: 0, name: 'Sohail.code', image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg', followingtime: 'Friends since 6 Feburary 2022' },
    { id: 1, name: 'Priya Bhanushali', image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg', followingtime: 'Friends since 6 Feburary 2022' },
    { id: 2, name: 'Jade Will Em', image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg', followingtime: 'Friends since 6 Feburary 2022' },
    { id: 3, name: 'Nisha Pd', image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg', followingtime: 'Friends since 6 Feburary 2022' },
    { id: 4, name: 'Shaikh Abdul', image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg', followingtime: 'Friends since 6 Feburary 2022' },
    { id: 5, name: 'Priya Bhanushali', image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg', followingtime: 'Friends since 6 Feburary 2022' },
    { id: 6, name: 'Sohail.code', image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg', followingtime: 'Friends since 6 Feburary 2022' },
    { id: 7, name: 'Jade Will Em', image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg', followingtime: 'Friends since 6 Feburary 2022' },
    { id: 8, name: 'Shaikh Ayesha', image: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg', followingtime: 'Friends since 12 January 2022' },
]
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

const Profile = ({ navigation }) => {
    const { height, width, fontScale } = useWindowDimensions();
    const [viewControl, setViewControl] = useState(0);
    const [theme, setTheme] = useState(0);
    const [language, setLanguage] = useState(0);

    const dispatch = useDispatch();
    const backgroundColor = useSelector((state) => state.background.color);
    const defaultTextColor = useSelector((state) => state.background.defaultTextColor);
    const appLanguage = useSelector((state) => state.background.language);
    const ViewControl = (item) => {
        setViewControl(item)
    }

    useEffect(() => {
        setTheme(backgroundColor == 'black' ? 1 : 0)
        setLanguage(appLanguage == 'ENGLISH' ? 0 : 1)

    }, [])


    const postText = appLanguage == 'HINDI' ? languages[0].Hindi[4].posts : 'Posts';
    const followersText = appLanguage == 'HINDI' ? languages[0].Hindi[5].followers : 'Followers';
    const followingsText = appLanguage == 'HINDI' ? languages[0].Hindi[6].followings : 'Followings';
    const viewallText = appLanguage == 'HINDI' ? languages[0].Hindi[8].viewall : 'View all';
    const commentsText = appLanguage == 'HINDI' ? languages[0].Hindi[9].comments : 'Comments';
    const likesText = appLanguage == 'HINDI' ? languages[0].Hindi[7].likes : 'View all';
    const chooselanguageText = appLanguage == 'HINDI' ? languages[0].Hindi[10].chooseLanguage : 'Choose Language';
    const selectthemeText = appLanguage == 'HINDI' ? languages[0].Hindi[11].selectTheme : 'Select Theme';
    const lightText = appLanguage == 'HINDI' ? languages[0].Hindi[12].light : 'Light';
    const darkText = appLanguage == 'HINDI' ? languages[0].Hindi[13].dark : 'Dark';

    const ThemeFC = (item) => {
        setTheme(item)
        handleColorChange(item)

    }
    const LanguageFC = (item) => {
        setLanguage(item)
        handleLanguageChange(item)

    }
    const handleLanguageChange = (item) => {
        let lng = item == 0 ? 'ENGLISH' : 'HINDI'
        dispatch(changeLanguage(lng));
    };

    const handleColorChange = (item) => {
        let color = item == 0 ? 'white' : 'black'
        dispatch(changeBackgroundColor(color));
        dispatch(changeDefaultTextColor(color == 'black' ? 'white' : 'black'));
    };
    return (
        <View style={{ flex: 1, height: height, backgroundColor: backgroundColor }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: backgroundColor, padding: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../Assets/backarrow.png')} style={{ width: 30, height: 30, tintColor: defaultTextColor }} />
                </TouchableOpacity>

                {/* ///////////////// */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Popover
                        popoverStyle={{ backgroundColor: backgroundColor, borderRadius: 20, borderWidth: 0.5, borderColor: defaultTextColor }}
                        from={(
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Image source={require('../Assets/translate.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                        )}>
                        <View style={{ margin: 10, width: width / 1.8 }}>
                            <Text style={{ color: defaultTextColor, fontSize: 18, textAlign: 'center' }}>{chooselanguageText}</Text>
                            <View style={{ alignItems: 'center', justifyContent: 'space-around', margin: 10 }}>
                                <TouchableOpacity onPress={() => LanguageFC(0)}
                                    style={{ marginBottom: 15, borderWidth: 0.5, borderColor: language == 0 ? AppColors.pinkColor : defaultTextColor, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../Assets/english.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
                                    <Text style={{ color: language == 0 ? AppColors.pinkColor : defaultTextColor, fontSize: 14, padding: 5, paddingHorizontal: 10 }}>English</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => LanguageFC(1)} style={{ borderWidth: 0.5, borderColor: language == 1 ? AppColors.pinkColor : defaultTextColor, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../Assets/hindi.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
                                    <Text style={{ color: language == 1 ? AppColors.pinkColor : defaultTextColor, fontSize: 14, padding: 5, paddingHorizontal: 10, width: 60 }}>हिंदी</Text></TouchableOpacity>
                            </View>
                        </View>
                    </Popover>
                    {/* ////////////// */}
                    <Popover
                        popoverStyle={{ backgroundColor: backgroundColor, borderRadius: 20, borderWidth: 0.5, borderColor: defaultTextColor }}
                        from={(
                            <TouchableOpacity>
                                <Image source={require('../Assets/theme.png')} style={{ width: 30, height: 30, tintColor: defaultTextColor }} />
                            </TouchableOpacity>
                        )}>
                        <View style={{ margin: 10, width: width / 1.8 }}>
                            <Text style={{ color: defaultTextColor, fontSize: 18, textAlign: 'center' }}>{selectthemeText}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin: 10 }}>
                                <TouchableOpacity onPress={() => ThemeFC(0)} style={{ borderWidth: 0.5, borderColor: theme == 0 ? AppColors.pinkColor : defaultTextColor, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../Assets/brightness.png')} style={{ width: 20, height: 20, marginLeft: 10, tintColor: theme == 0 ? AppColors.pinkColor : defaultTextColor }} />
                                    <Text style={{ color: theme == 0 ? AppColors.pinkColor : defaultTextColor, fontSize: 14, padding: 5, paddingHorizontal: 10, width: 60 }}>{lightText}</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => ThemeFC(1)} style={{ borderWidth: 0.5, borderColor: theme == 1 ? AppColors.pinkColor : defaultTextColor, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../Assets/brightness.png')} style={{ width: 20, height: 20, marginLeft: 10, tintColor: theme == 1 ? AppColors.pinkColor : defaultTextColor }} />
                                    <Text style={{ color: theme == 1 ? AppColors.pinkColor : defaultTextColor, fontSize: 14, padding: 5, paddingHorizontal: 10, width: 60 }}>{darkText}</Text></TouchableOpacity>
                            </View>
                        </View>
                    </Popover>
                </View>
            </View>

            <View style={[styles.profiledetailsContainer, { backgroundColor: backgroundColor, elevation: 10, shadowColor: defaultTextColor }]}>
                <View style={{ margin: 15 }}>
                    <Image source={{ uri: 'https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg' }} style={{ width: 100, height: 100, borderRadius: 100 / 2 }} />
                </View>
                <View style={{ margin: 15, flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: defaultTextColor, fontSize: 22, fontWeight: '900' }}>David William</Text>
                        <Image source={require('../Assets/pen.png')} style={{ width: 20, height: 20, marginLeft: 5 }} />
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: defaultTextColor, fontSize: 22, fontWeight: '900' }}>33</Text>
                            <Text style={{ color: AppColors.grayText, fontSize: 10, fontWeight: '900' }}>{postText}</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: defaultTextColor, fontSize: 22, fontWeight: '900' }}>700</Text>
                            <Text style={{ color: AppColors.grayText, fontSize: 10, fontWeight: '900' }}>{followersText}</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: defaultTextColor, fontSize: 22, fontWeight: '900' }}>1,000</Text>
                            <Text style={{ color: AppColors.grayText, fontSize: 10, fontWeight: '900' }}>{followingsText}</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* prfile gead end */}


            <View style={[styles.viewcontrols, { borderBottomColor: defaultTextColor }]}>
                <TouchableOpacity onPress={() => ViewControl(0)}><Text style={[styles.viewControlText, { color: viewControl == 0 ? AppColors.pinkColor : defaultTextColor }]}>{postText}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => ViewControl(1)}><Text style={[styles.viewControlText, { color: viewControl == 1 ? AppColors.pinkColor : defaultTextColor }]}>{followersText}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => ViewControl(2)}><Text style={[styles.viewControlText, { color: viewControl == 2 ? AppColors.pinkColor : defaultTextColor }]}>{followingsText}s</Text></TouchableOpacity>
            </View>

            <ScrollView style={{ marginBottom: 50 }}>
                {viewControl == 0 ?
                    <View style={{ width: width, alignItems: 'center' }}>

                        {posts.map((item, index) => {
                            return (
                                <Animatable.View animation="zoomIn" duration={500} delay={index * 300} key={index} style={{ width: width - 30 }}>
                                    <View style={[styles.itemContainer, { backgroundColor: backgroundColor, elevation: 10, shadowColor: defaultTextColor }]}>
                                        <View style={styles.itemContainerTop}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={{ uri: item.profile }} style={styles.itemProfileimage} />
                                                <View style={{ left: 5 }}>
                                                    <Text style={{ color: defaultTextColor, fontSize: 16 }}>{item.username}</Text>
                                                    <Text style={{ color: AppColors.grayText, fontSize: 10 }}>{item.postTime}. {item.location}</Text>
                                                </View>
                                            </View>
                                            <Popover
                                                popoverStyle={{ backgroundColor: backgroundColor, borderRadius: 20, borderWidth: 0.5, borderColor: defaultTextColor }}
                                                from={(
                                                    <TouchableOpacity >
                                                        <Image source={require('../Assets/dots.png')} resizeMode='contain' style={{ height: 20, width: 30, marginRight: 10, tintColor: defaultTextColor }} />
                                                    </TouchableOpacity>
                                                )}>
                                                <View style={{ margin: 10, width: width / 1.8 }}>
                                                    <Text style={{ color: defaultTextColor, fontSize: 18, textAlign: 'center' }}>Delete post ?</Text>
                                                    <Text style={{ color: AppColors.grayText, fontSize: 12 }}>if you don’t want to delete this post, you can archive it. Only you will be able to see it.</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin: 10 }}>
                                                        <TouchableOpacity style={{ borderWidth: 0.5, borderColor: AppColors.Error, borderRadius: 10 }}><Text style={{ color: AppColors.Error, fontSize: 14, padding: 5, paddingHorizontal: 10 }}>Delete</Text></TouchableOpacity>
                                                        <TouchableOpacity style={{ borderWidth: 0.5, borderColor: defaultTextColor, borderRadius: 10 }}><Text style={{ color: defaultTextColor, fontSize: 14, padding: 5, paddingHorizontal: 10 }}>Archive</Text></TouchableOpacity>
                                                    </View>
                                                </View>
                                            </Popover>

                                        </View>
                                        <View style={{ width: '100%', height: height / 3.5 }}>
                                            <Swiper loop={false} loadMinimal={true} animated={true}
                                                automaticallyAdjustContentInsets={true}
                                                loadMinimalLoader={<ActivityIndicator color={AppColors.pinkColor} />}
                                                style={{}} showsButtons={false} activeDotColor={AppColors.pinkColor} >
                                                {item.images.map((itemimg) => {
                                                    return (
                                                        <View key={itemimg.id} style={{ margin: 12, borderRadius: 15, borderWidth: 0.5, borderColor: defaultTextColor }}>
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
                                            <Image source={require('../Assets/speech-bubble.png')} resizeMode='contain' style={{ height: 24, width: 24, tintColor: defaultTextColor }} />
                                            {/* <Image source={require('../Assets/send.png')} resizeMode='contain' style={{ height: 22, width: 22 }} /> */}
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

                    </View> : null}
                {viewControl == 1 ?
                    <View style={{}}>
                        {FolowersData.map((item, index) => {
                            return (
                                <Animatable.View animation="zoomIn" duration={300} delay={index * 200} key={index} style={[styles.floowerslistContainer, { backgroundColor: backgroundColor }]}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={{ uri: item.image }} resizeMode='cover' style={{ width: 50, height: 50, borderRadius: 100 / 2, marginHorizontal: 5, marginVertical: 5 }} />
                                        <View style={{}}>
                                            <Text style={{ color: defaultTextColor, fontSize: 18 }}>{item.name}</Text>
                                            <Text style={{ color: AppColors.grayText, fontSize: 10 }}>{item.followingtime}</Text>
                                        </View>
                                    </View>
                                    <Popover
                                        popoverStyle={{ backgroundColor: backgroundColor, borderRadius: 20, borderWidth: 0.5, borderColor: defaultTextColor }}
                                        from={(
                                            <TouchableOpacity style={styles.removeButton}>
                                                <LinearGradient colors={[AppColors.lightpinkColor, AppColors.pinkColor, AppColors.red]} style={[styles.removeButton, { borderRadius: 50 }]}>
                                                    <Image source={require('../Assets/unfollow.png')} resizeMode='cover' style={{ width: 20, height: 20, tintColor: AppColors.whiteText }} />
                                                    <Text style={{ color: AppColors.whiteText, paddingLeft: 5 }}>Remove</Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        )}>
                                        <View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                                                <Image source={{ uri: item.image }} resizeMode='cover' style={{ width: 50, height: 50, borderRadius: 100 / 2, marginHorizontal: 5, marginVertical: 5 }} />
                                                <View style={{}}>
                                                    <Text style={{ color: defaultTextColor, fontSize: 18 }}>{item.name}</Text>
                                                    <Text style={{ color: AppColors.grayText, fontSize: 10 }}>{item.followingtime}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 15, marginBottom: 10, justifyContent: 'space-between' }}>

                                                <TouchableOpacity>
                                                    <LinearGradient colors={[AppColors.lightpinkColor, AppColors.pinkColor, AppColors.red]} style={[styles.removeButton, { borderRadius: 50 }]}>
                                                        <Image source={require('../Assets/prohibition.png')} resizeMode='cover' style={{ width: 18, height: 18, tintColor: AppColors.whiteText }} />
                                                        <Text style={{ color: AppColors.whiteText, paddingLeft: 5 }}>Cancel</Text>
                                                    </LinearGradient>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <LinearGradient colors={[AppColors.lightpinkColor, AppColors.pinkColor, AppColors.red]} style={[styles.removeButton, { borderRadius: 50 }]}>
                                                        <Image source={require('../Assets/unfollow.png')} resizeMode='cover' style={{ width: 18, height: 18, tintColor: AppColors.whiteText }} />
                                                        <Text style={{ color: AppColors.whiteText, paddingLeft: 5 }}>Remove</Text>
                                                    </LinearGradient>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </Popover>

                                </Animatable.View>
                            )
                        })}
                    </View> : null}
                {viewControl == 2 ?
                    <View style={{}}>
                        {FolowersData.map((item, index) => {
                            return (
                                <Animatable.View animation="zoomIn" duration={300} delay={index * 200} key={index} style={[styles.floowerslistContainer, { backgroundColor: backgroundColor }]}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={{ uri: item.image }} resizeMode='cover' style={{ width: 50, height: 50, borderRadius: 100 / 2, marginHorizontal: 5, marginVertical: 5 }} />
                                        <View style={{}}>
                                            <Text style={{ color: defaultTextColor, fontSize: 18 }}>{item.name}</Text>
                                            <Text style={{ color: AppColors.grayText, fontSize: 10 }}>{item.followingtime}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.removeButton}>
                                        <LinearGradient colors={[AppColors.lightpinkColor, AppColors.pinkColor, AppColors.red]} style={[styles.removeButton, { borderRadius: 50 }]}>
                                            <Image source={require('../Assets/usercheck.png')} resizeMode='cover' style={{ width: 18, height: 18, tintColor: AppColors.whiteText }} />
                                            <Text style={{ color: AppColors.whiteText, paddingLeft: 5 }}>Remove</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>

                                </Animatable.View>
                            )
                        })}
                    </View> : null}
            </ScrollView>


            <View style={{ width: width, position: 'absolute', bottom: 0 }}>
                <BottomTab screen={4} navigation={navigation} />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    profiledetailsContainer: {
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        marginHorizontal: 10
    },
    viewcontrols: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 15,
        borderBottomWidth: 1
    },
    viewControlText: {
        fontSize: 16,
        fontWeight: '900',
        marginBottom: 8
    },
    floowerslistContainer: {

        borderRadius: 25,
        margin: 10, flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 100
    },
    removeButton: {
        flexDirection: 'row',
        alignItems: 'center', padding: 10,
        borderRadius: 50,
        justifyContent: 'space-between',

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