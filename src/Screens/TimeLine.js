import { ActivityIndicator, FlatList, Image, RefreshControl, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import InstaStory from 'react-native-insta-story';
import Header from '../Commons/Header';
import { AppColors } from '../Colors';
import Swiper from 'react-native-swiper';
import BottomTab from '../Commons/BottomTab';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import * as Animatable from 'react-native-animatable';
const data = [
    {
        user_id: 1,
        user_image:
            'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: 'Ahmet Çağlar Durmuş',
        stories: [
            {
                story_id: 1,
                story_image:
                    'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image:
                    'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
            },
        ],
    },
    {
        user_id: 2,
        user_image:
            'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: 'Test User',
        stories: [
            {
                story_id: 1,
                story_image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image:
                    'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            },
        ],
    },
    {
        user_id: 3,
        user_image:
            'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: 'Ahmet Çağlar Durmuş',
        stories: [
            {
                story_id: 1,
                story_image:
                    'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image:
                    'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
            },
        ],
    },
    {
        user_id: 4,
        user_image:
            'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: 'Test User',
        stories: [
            {
                story_id: 1,
                story_image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image:
                    'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            },
        ],
    },
    {
        user_id: 5,
        user_image:
            'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: 'Test User',
        stories: [
            {
                story_id: 1,
                story_image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image:
                    'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            },
        ],
    },
    {
        user_id: 6,
        user_image:
            'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: 'Test User',
        stories: [
            {
                story_id: 1,
                story_image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image:
                    'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            },
        ],
    },
    {
        user_id: 7,
        user_image:
            'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: 'Test User',
        stories: [
            {
                story_id: 1,
                story_image:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image:
                    'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
                swipeText: 'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            },
        ],
    }
];
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
const TimeLine = () => {
    const [stories, setStories] = useState([])
    const { height, width, fontScale } = useWindowDimensions();

    const userStories = [
        {
            user_id: 2,
            user_image:
                'https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png',
            user_name: 'Test User',
            stories: [
                {
                    story_id: 1,
                    story_image:
                        'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                }
            ],
        }
    ]

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                refreshControl={
                    <RefreshControl colors={['#000', AppColors.pinkColor]} progressViewOffset={0.5} tintColor={'red'} refreshing={refreshing} onRefresh={onRefresh} />
                }
                style={{ width: width, backgroundColor: AppColors.backgroundColor, flex: 1 }}>
                <Header />
                {/* Story container */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ top: -13, marginRight: -15 }}>
                        <View style={{ zIndex: 1 }}>
                            <Image source={require('../Assets/Add_Plus_Circle.png')} style={styles.plusiconTop} />
                        </View>
                        <InstaStory
                            data={userStories}
                            duration={10}
                            avatarSize={70}
                            showAvatarText={true}
                            unPressedBorderColor={AppColors.pinkColor}
                            unPressedAvatarTextColor={AppColors.blackText}
                        />
                    </View>
                    <View style={{ width: '80%', borderRadius: 100 / 2 }}>
                        <InstaStory
                            data={data}
                            duration={10}
                            avatarSize={70}
                            showAvatarText={true}
                            unPressedBorderColor={AppColors.pinkColor}
                            unPressedAvatarTextColor={AppColors.blackText}

                        />
                    </View>
                </View>
                {/* Story container End*/}
                {/* posts started */}
                <View style={{ width: width, alignItems: 'center' }}>
                    {posts.map((item, index) => {
                        return (
                            <Animatable.View animation="fadeInUp" duration={1000} delay={index * 300} key={index} style={{ width: width - 30 }}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.itemContainerTop}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={{ uri: item.profile }} style={styles.itemProfileimage} />
                                            <View style={{ left: 5 }}>
                                                <Text style={{ color: AppColors.blackText, fontSize: 16 }}>{item.username}</Text>
                                                <Text style={{ color: AppColors.grayText, fontSize: 10 }}>{item.postTime}. {item.location}</Text>
                                            </View>
                                        </View>
                                        <Image source={require('../Assets/dots.png')} resizeMode='contain' style={{ height: 20, width: 30, marginRight: 10 }} />
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
                                            <Image source={require('../Assets/heart.png')} resizeMode='contain' style={{ height: 25, width: 25 }} />
                                        }
                                        <Image source={require('../Assets/speech-bubble.png')} resizeMode='contain' style={{ height: 24, width: 24, tintColor: '#000' }} />
                                        <Image source={require('../Assets/send.png')} resizeMode='contain' style={{ height: 22, width: 22 }} />
                                    </View>
                                    <View style={{ left: 20, margin: 5 }}>
                                        <Text style={{ color: AppColors.blackText, fontSize: 12, fontWeight: '700' }}>{item.likesCount} Likes</Text>
                                        <Text style={{ color: AppColors.grayText, fontSize: 10, fontWeight: '700' }}>View all {item.commentsCount} Comments</Text>
                                    </View>

                                </View>
                            </Animatable.View>
                        )
                    })
                    }

                </View>


            </ScrollView>
            <View style={{ width: width }}>
                <BottomTab screen={0} />
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
        backgroundColor: AppColors.backgroundColor,
        borderRadius: 15,
        elevation: 2,
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