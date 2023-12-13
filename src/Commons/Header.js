import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColors } from '../Colors'
import { AppText } from '../Text'
import { useNavigation } from '@react-navigation/native'

const Header = ({  }) => {
    const navigation = useNavigation()
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.picspile}>{AppText.AppName}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Message')} activeOpacity={0.8}>
                    <Image style={styles.image} resizeMode="contain"
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
        margin: 5

    },
    image: {
        width: 30,
        height: 30,
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