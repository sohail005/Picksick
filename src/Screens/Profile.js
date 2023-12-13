import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import BottomTab from '../Commons/BottomTab';

const Profile = () => {
    const { height, width, fontScale } = useWindowDimensions();

    return (
        <View style={{flex:1,height:height}}>




            <View style={{ width: width,position:'absolute',bottom:0 }}>
                <BottomTab screen={4} />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})