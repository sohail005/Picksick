import { StyleSheet, Text, View, useWindowDimensions, Image, TextInput, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AppColors } from '../Colors';
import Tts from 'react-native-tts';
import { Icon, Slider } from '@rneui/base';
import Popover from 'react-native-popover-view';


const voiceSpeedArray = [
    { id: 0, value: 0.1 },
    { id: 1, value: 0.2 },
    { id: 2, value: 0.3 },
    { id: 3, value: 0.4 },
    { id: 4, value: 0.5 },
    { id: 5, value: 0.6 },
    { id: 6, value: 0.7 },
    { id: 7, value: 0.8 },
    { id: 8, value: 0.9 },
    { id: 9, value: 1 },
    { id: 10, value: 1.2 },
    { id: 11, value: 1.5 },
    { id: 12, value: 1.8 },
    { id: 13, value: 2 },
]
const TextToSpeach = ({ navigation }) => {

    const initialvoiceSample = 'hi-in-x-hia-local'
    const { height, width, fontScale } = useWindowDimensions();
    const [textToConvert, setTextToConvert] = useState("")
    const [hidePlayButton, setHidePlayButton] = useState(true)
    const [sliderValue, setSliderValue] = useState(0.3);
    const [listofvoices, setListofVoices] = useState([]);
    const [aiVoice, setAiVoice] = useState(initialvoiceSample)
    const [aiVoiceId, setAiVoiceId] = useState(initialvoiceSample)
    const [voiceLanguage, setVoiceLanguage] = useState('hi-IN')

    const [voiceRate, setVoiceRate] = useState(1)
    const [voiceRateId, setVoiceRateId] = useState(0)

    const backgroundColor = useSelector((state) => state?.background?.color);
    const defaultTextColor = useSelector((state) => state?.background?.defaultTextColor);


    useEffect(() => {
        Tts.getInitStatus().then(() => {
            Tts.setDefaultVoice(initialvoiceSample);
            if (listofvoices.length == 0) {
                Tts.voices().then(voices => {
                    let newArray = []
                    voices.forEach((element, index) => {
                        if (index < 10) {
                            newArray.push(element)
                        }
                    });
                    setListofVoices(newArray)
                });
            } else {
            }
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
        Tts.setDucking(true);
        Tts.setDefaultVoice(aiVoice);
        Tts.setDefaultRate(voiceRate, true);
        Tts.setDefaultPitch(sliderValue);
        await Tts.speak(textToConvert);
        Tts.addEventListener('tts-start', (event) => setHidePlayButton(true));
        Tts.addEventListener('tts-finish', (event) => setHidePlayButton(false));
        Tts.addEventListener('tts-cancel', (event) => console.log("cancel", event));
    }

    const onItemClick = (item) => {
        setAiVoice(item.name)
        setAiVoiceId(item.id)
        setVoiceLanguage(item.language)
    }
    const onItemSpeedClick = (item) => {
        setVoiceRate(item.value)
        setVoiceRateId(item.id)
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

            <View style={{ width: width - 50, alignSelf: 'center', borderWidth: 0.5, padding: 10, marginBottom: 10, borderRadius: 15, borderColor: AppColors.pinkColor }}>
                <View><Text style={{ marginTop: 10, color: defaultTextColor, fontWeight: '700' }}>Voice Pitch</Text></View>
                <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    maximumValue={5}
                    minimumValue={0}
                    step={0.1}
                    allowTouchTrack
                    minimumTrackTintColor={AppColors.pinkColor}
                    trackStyle={{ height: 3, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 5, width: 5, backgroundColor: 'transparent' }}
                    thumbProps={{
                        children: (
                            <Icon
                                name="heartbeat"
                                type="font-awesome"
                                size={5}
                                reverse
                                containerStyle={{ bottom: 12, right: 12, }}
                                color={AppColors.pinkColor}
                            />
                        ),
                    }}
                />
            </View>

            <View style={{ width: width - 50, alignSelf: 'center', borderWidth: 0.5, padding: 10, borderRadius: 15, borderColor: AppColors.pinkColor, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Popover
                    popoverStyle={{ backgroundColor: backgroundColor, borderRadius: 20, borderWidth: 0.5, borderColor: defaultTextColor }}
                    from={(
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text style={{ color: defaultTextColor, textAlign: 'center', width: '100%' }}>Speed</Text>
                            <Text style={{ color: defaultTextColor, backgroundColor: AppColors.pinkColor, padding: 5, margin: 10, textAlign: 'center', borderRadius: 15, fontSize: 12, width: '100%' }}>Selected: {voiceRate}</Text>
                        </TouchableOpacity>
                    )}>
                    <>
                        <Text style={{ color: defaultTextColor, fontSize: 18, textAlign: 'center', marginTop: 10 }}>Voice Speed</Text>
                        <ScrollView style={{ margin: 10, width: width / 3, height: height / 2 }}>
                            {voiceSpeedArray.map((item, index) => {
                                return (
                                    <TouchableOpacity onPress={() => onItemSpeedClick(item)} key={index}
                                        style={{ margin: 5, borderWidth: 0.5, padding: 10, borderRadius: 15 }}>
                                        <Text style={{ color: voiceRateId == item.id ? AppColors.pinkColor : AppColors.grayText }}>{item.value}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </>
                </Popover>

                <Popover
                    popoverStyle={{ backgroundColor: backgroundColor, borderRadius: 20, borderWidth: 0.5, borderColor: defaultTextColor }}
                    from={(
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text style={{ color: defaultTextColor, textAlign: 'center', width: '100%' }}>Select Voice</Text>
                            <Text style={{ color: defaultTextColor, backgroundColor: AppColors.pinkColor, padding: 5, margin: 10, textAlign: 'center', borderRadius: 15, fontSize: 12, width: '100%' }}>Slect {voiceLanguage}</Text>
                        </TouchableOpacity>
                    )}>
                    <>
                        <Text style={{ color: defaultTextColor, fontSize: 18, textAlign: 'center', marginTop: 10 }}>Select Voice</Text>
                        <ScrollView style={{ margin: 10, width: width / 3, height: height / 2 }}>
                            {listofvoices.map((item, index) => {
                                return (
                                    <TouchableOpacity onPress={() => onItemClick(item)} key={index}
                                        style={{ margin: 5, borderWidth: 0.5, padding: 10, borderRadius: 15 }}>
                                        <Text style={{ color: aiVoiceId == item.id ? AppColors.pinkColor : AppColors.grayText }}>{item.language}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </>
                </Popover>

            </View>

            <View style={{ marginTop: 15 }}>
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