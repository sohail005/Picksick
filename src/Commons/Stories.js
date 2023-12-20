import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { AppColors } from '../Colors';
import LinearGradient from 'react-native-linear-gradient';

const Stories = (textColor) => {
    const navigation = useNavigation();

    const storyInfo = [
        {
            id: 0,
            name: 'Your Story',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDcmO22c2BCvZeEI6jctj8o65_W7Q5VDpJJ4CLbyFQgdU3fIDGHweRm34CR5QVgtoFwk&usqp=CAU",
        },
        {
            id: 1,
            name: 'Ram_Charan',
            image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702512000&semt=ais",
        },
        {
            id: 2,
            name: 'Tom',
            image: "https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg",
        },
        {
            id: 3,
            name: 'The_Groot',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJ5x6dy7yAKqj7ZdZp_Wno30Z6GT7lCvbCvHpTa6AuzEbnFGKMIgFDd9xU2X9uSwLOyw&usqp=CAU",
        },
        ,
        {
            id: 4,
            name: 'loverland',
            image: "https://i.pinimg.com/474x/9f/e4/e4/9fe4e42a2f83f78caef84579c1f1980b.jpg",
        },
        ,
        {
            id: 5,
            name: 'chillhouse',
            image: "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg",
        },
    ];

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 10,paddingBottom:0 }}>
            {storyInfo.map((data, index) => {
                return (
                    <TouchableOpacity
                    activeOpacity={0.8}
                        key={index}
                        onPress={() =>
                            navigation.push('Status', {
                                name: data.name,
                                image: data.image,
                            })
                        }>
                        <Animatable.View animation="zoomIn" duration={500} delay={index * 200} key={index}
                            style={{
                                flexDirection: 'column',
                                paddingHorizontal: 8,
                                position: 'relative',
                            }}>
                            {data.id == 0 ? (
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 10,
                                        right: 10,
                                        zIndex: 1,
                                    }}>
                                    <Image source={require('../Assets/Add_Plus_Circle.png')} style={{ width: 25, height: 25 }} />
                                </View>
                            ) : null}
                            <LinearGradient colors={[AppColors.lightpinkColor, AppColors.pinkColor, AppColors.red]} style={{
                                width: 68,
                                height: 68,
                                backgroundColor: 'white',
                                borderRadius: 100 / 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image
                                    source={{ uri: data.image }}
                                    style={{
                                        resizeMode: 'cover',
                                        width: '92%',
                                        height: '92%',
                                        borderRadius: 100,
                                        backgroundColor: 'orange',
                                    }}
                                />
                            </LinearGradient>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 10,
                                    opacity: data.id == 0 ? 1 : 0.5,
                                    color:'#fff',
                                    padding:5
                                }}>
                                {data.name}
                            </Text>
                        </Animatable.View>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

export default Stories;