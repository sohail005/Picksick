import { PermissionsAndroid, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BottomTab from '../Commons/BottomTab';
import { AppColors } from '../Colors';
import { Image } from 'react-native-animatable';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import Popover from 'react-native-popover-view';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { languages } from '../Commons/MultiLaguage';

const AddPost = ({ navigation }) => {
    const { height, width, fontScale } = useWindowDimensions();
    const [localImags, setLocalImags] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [resizeMode, setResizeMode] = useState("cover");
    const appLanguage = useSelector((state) => state.background.language);

    async function hasAndroidPermission() {
        const getCheckPermissionPromise = () => {
            if (Platform.Version >= 33) {
                return Promise.all([
                    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES),
                    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO),
                ]).then(
                    ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
                        hasReadMediaImagesPermission && hasReadMediaVideoPermission,
                );
            } else {
                return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
            }
        };

        const hasPermission = await getCheckPermissionPromise();
        if (hasPermission) {
            return true;
        }
        const getRequestPermissionPromise = () => {
            if (Platform.Version >= 33) {
                return PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                    PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
                ]).then(
                    (statuses) =>
                        statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
                        PermissionsAndroid.RESULTS.GRANTED &&
                        statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
                        PermissionsAndroid.RESULTS.GRANTED,
                );
            } else {
                return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then((status) => status === PermissionsAndroid.RESULTS.GRANTED);
            }
        };

        return await getRequestPermissionPromise();
    }

    async function savePicture() {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }
        //CameraRoll.save({album })
    };
    const newpostText = appLanguage == 'HINDI' ? languages[0].Hindi[2].newpost : 'New Post';
    const nextText = appLanguage == 'HINDI' ? languages[0].Hindi[14].next : 'Next';
    const loadGalleryText = appLanguage == 'HINDI' ? languages[0].Hindi[3].loadgallery : 'Load Your Gallery Images';


    useEffect(() => {
        handleButtonPress()
        savePicture()
            }, [])
    const scrollRef = useRef();

    const handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 21,
            assetType: "All",
        })
            .then(r => {
                // console.log(r.edges);
                setLocalImags(r.edges)
            })
            .catch((err) => {
                console.log("err", err);
            });
    };


    const onImageClick = (img) => {
        setSelectedImage(img)
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
            duration: 5000
        });
    }
    const resizeImageFc = () => {
        if (resizeMode === "cover") {
            setResizeMode("contain")
        } else {
            setResizeMode("cover")
        }
    }
    const backgroundColor = useSelector((state) => state.background.color);
    const defaultTextColor = useSelector((state) => state.background.defaultTextColor);


    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 5 }}>
                <View><Image source={require('../Assets/close.png')} style={{ width: 16, height: 16, marginHorizontal: 15, tintColor: defaultTextColor }} /></View>
                <View ><Text style={{ color: defaultTextColor, fontSize: 18, width: 80 }}>{newpostText}</Text></View>
                <TouchableOpacity><Image source={require('../Assets/settings.png')} style={{ width: 20, height: 20, marginHorizontal: 15, tintColor: defaultTextColor }} /></TouchableOpacity>
            </View>




            {/* local images */}
            <ScrollView ref={scrollRef} style={{ width: width, backgroundColor: backgroundColor }}>

                {localImags.length == 0 ?
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: height - 100 }}>
                        <TouchableOpacity onPress={() => handleButtonPress()}
                            style={{ backgroundColor: AppColors.grayText, borderRadius: 15, elevation: 10, shadowColor: defaultTextColor }}>
                            <Text style={{ color: AppColors.lightGray, fontSize: 14, padding: 10 }}>{loadGalleryText}</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <>
                        <View style={{ height: height / 2, width: width }}>
                            {localImags[0]?.node?.image?.uri == undefined ?
                                null :
                                <Animatable.View animation="zoomIn" duration={800} delay={200}>
                                    <Image
                                        resizeMode={resizeMode}
                                        source={{ uri: selectedImage === "" ? localImags[0]?.node?.image?.uri : selectedImage }}
                                        style={{ height: height / 2, width: width }}
                                    />
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => resizeImageFc()}
                                        style={{ top: 20, left: 20, position: 'absolute', backgroundColor: AppColors.transparent, padding: 10, borderRadius: 20 }}>
                                        <Image
                                            resizeMode={'contain'}
                                            source={require('../Assets/resolution.png')}
                                            style={{ height: 25, width: 25, tintColor: AppColors.whiteText }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8}
                                        style={{ top: 20, right: 20, position: 'absolute', backgroundColor: AppColors.transparent, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 }}>
                                        <Text style={{ color: AppColors.pinkColor, width: 40 }}>{nextText}</Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            }

                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                width: '100%',
                                marginBottom: 55,
                                marginTop: 2
                            }}>
                            {localImags.map((p, i) => {
                                return (
                                    <Animatable.View animation="zoomIn" duration={100} delay={i * 100} key={i} style={{ paddingBottom: 2, width: '33%' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={() => onImageClick(p.node.image.uri)}
                                        >
                                            <Image
                                                resizeMode='cover'
                                                source={{ uri: p.node.image.uri }}
                                                style={{ width: '100%', height: width / 2 }}
                                            />
                                        </TouchableOpacity>
                                    </Animatable.View>
                                );
                            })}
                        </View>
                    </>
                }


                {/* {localImags.map((p, i) => {
                    return (
                        <View key={i} style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}>
                            <Image
                                
                                style={{
                                    width: width / 3,
                                    height: width / 2,
                                    margin: 5
                                }}
                                resizeMode='contain'
                                source={{ uri: p.node.image.uri }}
                            />
                        </View>
                    )
                })} */}
            </ScrollView>

            {/* local images end */}


            <View style={{ width: width, position: 'absolute', bottom: 0 }}>
                <BottomTab screen={3} navigation={navigation} />
            </View>
        </View>
    )
}

export default AddPost

const styles = StyleSheet.create({})