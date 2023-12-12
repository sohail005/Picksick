import { Image, ScrollView, StyleSheet, Text, View, VirtualizedList, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import InstaStory from 'react-native-insta-story';
import Header from '../Commons/Header';
import { AppColors } from '../Colors';


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
                        'https://img.freepik.com/premium-photo/natureinspired-technology-big-smartphone-with-blank-screen-fresh-flower-bouquets_763042-7203.jpg',
                    swipeText: 'Custom swipe text for this story',
                    onPress: () => console.log('story 1 swiped'),
                }
            ],
        }
    ]

    return (
        <View style={{ width: width }}>
            <Header />
            {/* Story container */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <View style={{top:-10,marginRight:-15}}>
                    <View style={{ zIndex: 1 }}>
                        <Image source={require('../Assets/Add_Plus_Circle.png')} style={styles.plusiconTop} />
                    </View>
                    <InstaStory
                        data={userStories}
                        duration={10}
                        avatarSize={70}
                    />
                </View>
                <View style={{ width: '80%',borderRadius:100/2 }}>
                    <InstaStory
                        data={data}
                        duration={10}
                        avatarSize={70}
                        storyContainerStyle={{borderRadius:100/2}}
                    />
                </View>
            </View>
            {/* Story container End*/}


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
    }
})