import { StyleSheet, Text, View, useWindowDimensions, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AppColors } from '../Colors';
import Tts from 'react-native-tts';

const TextToSpeach = ({ navigation }) => {
    const { height, width, fontScale } = useWindowDimensions();
    const [textToConvert, setTextToConvert] = useState("")
    const [hidePlayButton, setHidePlayButton] = useState(true)
    const backgroundColor = useSelector((state) => state?.background?.color);
    const defaultTextColor = useSelector((state) => state?.background?.defaultTextColor);


    useEffect(() => {
        Tts.getInitStatus().then(() => {
            Tts.speak('Hey! ,You have Been hacked!', {
                androidParams: {
                    KEY_PARAM_PAN: -1,
                    KEY_PARAM_VOLUME: 1,
                    KEY_PARAM_STREAM: 'STREAM_NOTIFICATION',
                },
            });
        });


    }, [])


    const ConvertTextToVoice = (tex) => {
        setTextToConvert(tex)

        if (tex.length > 0) {
            setHidePlayButton(false)
        } else {
            setHidePlayButton(true)
        }
    }

    const getAiVoice = async () => {
        //Tts.voices().then(voices => console.log(voices));
        Tts.setDucking(true);
        Tts.setDefaultVoice('en-us-x-iol-local');
        Tts.setDefaultRate(1.1, true);
        Tts.setDefaultPitch(0.4);
        await Tts.speak(textToConvert);
        Tts.addEventListener('tts-start', (event) => setHidePlayButton(true));
        Tts.addEventListener('tts-finish', (event) => setHidePlayButton(false));
        Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));
    }


    return (
        <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
            {/* Header */}
            <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../Assets/backarrow.png')} style={{ width: 25, height: 25, tintColor: defaultTextColor, marginLeft: 15 }} />
                </TouchableOpacity>
                <Text style={{ color: defaultTextColor, fontSize: 22, marginLeft: 15, paddingVertical: 5, width: '50%' }}>Text To AI Voice</Text>
            </TouchableOpacity>
            {/* Header */}

            <View style={{ width: width, alignSelf: 'center' }}>
                <TextInput
                    value={textToConvert}
                    style={{
                        color: AppColors.blackText, width: '90%', alignSelf: 'center', borderWidth: 0.5,
                        borderColor: AppColors.pinkColor, margin: 20, borderRadius: 15, height: height / 3, padding: 15, textAlignVertical: 'top'
                    }}
                    cursorColor={AppColors.pinkColor}
                    multiline={true}
                    clearButtonMode='always'
                    placeholder='Enter Your text to be converted to AI Voice'
                    placeholderTextColor={AppColors.lightGray}
                    onChangeText={ConvertTextToVoice}
                />
            </View>


            <View>

                {hidePlayButton ?
                    <TouchableOpacity
                        activeOpacity={0.8} style={{ backgroundColor: AppColors.lightGray, width: width / 2, alignSelf: 'center', borderRadius: 15 }} >
                        <Text style={{ color: AppColors.whiteText, fontSize: 16, padding: 15, textAlign: 'center', fontWeight: '900' }}>Play Ai Voice</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => getAiVoice()}
                        activeOpacity={0.5} style={{ backgroundColor: AppColors.pinkColor, width: width / 2, alignSelf: 'center', borderRadius: 15 }} >
                        <Text style={{ color: AppColors.whiteText, fontSize: 16, padding: 15, textAlign: 'center', fontWeight: '900' }}>Play Ai Voice</Text>
                    </TouchableOpacity>
                }

            </View>



        </View>
    )
}

export default TextToSpeach

const styles = StyleSheet.create({})