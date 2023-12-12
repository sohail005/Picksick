import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColors } from '../Colors'
import { AppText } from '../Text'

const Header = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.picspile}>{AppText.AppName}</Text>
                <TouchableOpacity activeOpacity={0.8}>
                <Image style={styles.image} resizeMode="cover"
                    source={require('../Assets/Chat_Circle_Dots.png')} />
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


    },
    image: {
        width: 35,
        height: 35,
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