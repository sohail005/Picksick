import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColors } from '../Colors'
import { AppText } from '../Text'
import { useNavigation } from '@react-navigation/native'
import MaskedView from '@react-native-masked-view/masked-view'
import LinearGradient from 'react-native-linear-gradient'

const Header = ({ title }) => {
    const navigation = useNavigation()
    return (
        <View>
            <View style={styles.container}>

                <MaskedView
                    style={{ flex: 1, flexDirection: 'column', height: 30 }}
                    maskElement={
                        <View style={{                                // Transparent background because mask is based off alpha channel.
                            backgroundColor: 'transparent',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            marginLeft: 10,
                        }}>
                            <Text style={{
                                fontSize: 28,
                                color: AppColors.blackText,
                                fontWeight: 'bold',
                                fontFamily: 'Montserrat-Medium'
                            }}>{title}</Text>
                        </View>
                    }>
                    {/* Shows behind the mask, you can put anything here, such as an image */}
                    <View style={{ flex: 1, height: '100%', backgroundColor: AppColors.pinkColor }} />
                    <View style={{ flex: 1, height: '100%', backgroundColor: AppColors.pinkColor }} />
                    <View style={{ flex: 1, height: '100%', backgroundColor: AppColors.Error }} />

                </MaskedView>


                <TouchableOpacity onPress={() => navigation.navigate('TextToSpeach')} style={{ marginRight: 10 }} activeOpacity={0.8}>
                    <Image style={[styles.image, { tintColor: AppColors.pinkColor }]} resizeMode="cover"
                        source={require('../Assets/voice.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Message')} activeOpacity={0.8}>
                    <Image style={[styles.image, { tintColor: AppColors.pinkColor }]} resizeMode="contain"
                        source={require('../Assets/messenger.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5

    },
    image: {
        width: 25,
        height: 25,
        marginRight: 12
    },
    picspile: {
        color: AppColors.pinkColor,
        fontSize: 35,
        paddingLeft: 12,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '700'
    }

})