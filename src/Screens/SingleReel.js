import { StyleSheet, Text, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import Video from 'react-native-video';
import { AppColors } from '../Colors';

const SingleReel = ({ item, index, currentIndex }) => {
    const videoRef = useRef(null);
    const { height, width, fontScale } = useWindowDimensions();

    const onBuffer = buffer => {
        console.log('buffring', buffer);
    };
    const onError = error => {
        console.log('error', error);
    };
    const [mute, setMute] = useState(false);
    const [like, setLike] = useState(item.isLike);

    return (
        <View
            style={{
                width: width,
                height: height,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setMute(!mute)}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                }}>
                <Video
                    videoRef={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    repeat={true}
                    resizeMode="cover"
                    // paused={currentIndex == index ? false : true}
                    source={item.video}
                    muted={mute}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}
                />
            </TouchableOpacity>
            <Image
                source={require('../Assets/mute.png')}
                style={{
                    width: mute ? 20 : 0,
                    height: mute ? 20 : 0,
                    resizeMode: 'cover',
                    borderRadius: 100,
                    position: 'absolute',
                    backgroundColor: 'rgba(52,52,52,0.6)',
                    padding: mute ? 20 : 0,
                    tintColor: AppColors.whiteText
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    width: width,
                    zIndex: 1,
                    bottom: 0, //edited
                    padding: 10,
                }}>
                <View style={{}}>
                    <TouchableOpacity style={{ width: 150 }}>
                        <View
                            style={{ width: 100, flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: 100,
                                    backgroundColor: 'white',
                                    margin: 10,
                                }}>
                                <Image
                                    source={{ uri: item.postProfile }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        resizeMode: 'cover',
                                        borderRadius: 100,
                                    }}
                                />
                            </View>
                            <Text style={{ color: 'white', fontSize: 16 }}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 10 }}>
                        {item.description}
                    </Text>
                    <View style={{ flexDirection: 'row', padding: 10,marginBottom:40 }}>
                    <Image
                        source={require('../Assets/wave-sound.png')}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: 'contain',
                            tintColor: AppColors.whiteText,
                            marginHorizontal:5
                        }}
                    />

                        <Text style={{ color: 'white' }}>Original Audio</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 50, //edited
                    right: 0,
                }}>
                <TouchableOpacity onPress={() => setLike(!like)} style={{ padding: 10 }}>
                    <Image
                        source={require('../Assets/heart.png')}
                        style={{
                            width: 30,
                            height: 30,
                            resizeMode: 'cover',
                            tintColor: like ? AppColors.Error : AppColors.whiteText
                        }}
                    />
                    <Text style={{ color: 'white' }}>{item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Image
                        source={require('../Assets/speech-bubble.png')}
                        style={{
                            width: 30,
                            height: 30,
                            resizeMode: 'cover',
                            tintColor: AppColors.whiteText

                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Image
                        source={require('../Assets/send.png')}
                        style={{
                            width: 30,
                            height: 30,
                            resizeMode: 'cover',
                            tintColor: AppColors.whiteText
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 10 }}>

                    <Image
                        source={require('../Assets/dots.png')}
                        style={{
                            width: 30,
                            height: 30,
                            resizeMode: 'cover',
                            tintColor: AppColors.whiteText
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: 'white',
                        margin: 10,
                    }}>
                    <Image
                        source={{ uri: item.postProfile }}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 10,
                            resizeMode: 'cover',
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

export default SingleReel

const styles = StyleSheet.create({})