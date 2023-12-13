import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import BottomTab from '../Commons/BottomTab';

const AddPost = () => {
    const { height, width, fontScale } = useWindowDimensions();

    return (
        <View style={{flex:1,height:height}}>




            <View style={{ width: width,position:'absolute',bottom:0 }}>
                <BottomTab screen={2} />
            </View>
        </View>
    )
}

export default AddPost

const styles = StyleSheet.create({})