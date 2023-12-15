import { StyleSheet, Text, View, useWindowDimensions, ScrollView, ActivityIndicator, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BottomTab from '../Commons/BottomTab';
import Video from 'react-native-video';
import Swiper from 'react-native-swiper';
import { AppColors } from '../Colors';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { videoData } from '../Commons/Database';
import SingleReel from './SingleReel';

const ShortVideos = ({ navigation }) => {
    const { height, width, fontScale } = useWindowDimensions();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeIndexValue = ({ index }) => {
        setCurrentIndex(index);
    };

    return (
        <View style={{ flex: 1, height: height }}>
            {/* Shortvideo component started */}
            <SwiperFlatList
                vertical={true}
                onChangeIndex={handleChangeIndexValue}
                data={videoData}
                renderItem={({ item, index }) => (
                    <SingleReel item={item} index={index} currentIndex={currentIndex} />
                )}
                keyExtractor={(item, index) => index}
            />

            {/* Shortvideo component started */}


            <View style={{ width: width, position: 'absolute', bottom: 0 }}>
                <BottomTab screen={2} />
            </View>
        </View>
    )
}

export default ShortVideos

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    activityIndicator: {
        position: 'absolute',

    },
    rightButtonsContainer: {
        width: 60,
        alignItems: 'center',
        right: 10, bottom: 100, position: 'absolute'
    },
    rightcontrolbuttons: {
        marginTop: 15, alignItems: 'center',

    },
    userinfoViewContainer: {
        bottom: 100,
        left: 20,
        position: 'absolute',

    },
    topView: {
        top: 10,
        left: 10,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',

    }
})