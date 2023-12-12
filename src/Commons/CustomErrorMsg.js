import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { AppColors } from '../Colors';

const CustomErrorMsg = ({ Error }) => {
    const { height, width, fontScale } = useWindowDimensions();

    return (
        <View>
            <Text style={[styles.text, { width: width - 100 }]}>{Error}</Text>
        </View>
    )
}

export default CustomErrorMsg;

const styles = StyleSheet.create({
    text: {
        color: AppColors.pinkColor,
        paddingHorizontal: 10,
        fontSize:12,
        paddingVertical:2
    }
})