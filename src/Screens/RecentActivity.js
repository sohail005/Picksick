import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import BottomTab from '../Commons/BottomTab';
import { AppColors } from '../Colors';

const RecentActivity = ({ navigation }) => {
    const { height, width, fontScale } = useWindowDimensions();

    return (
        <View style={{ flex: 1, height: height, backgroundColor: AppColors.backgroundColor }}>



        </View>
    )
}

export default RecentActivity

const styles = StyleSheet.create({})