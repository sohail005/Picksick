import { StyleSheet, Text, View, useWindowDimensions, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { FriendsProfileData } from '../Commons/Database';
import { AppColors } from '../Colors';
import * as Animatable from 'react-native-animatable';

const Message = ({ navigation }) => {
  const { height, width, fontScale } = useWindowDimensions();

  return (
    <View style={{ flex: 1, width: width, height: height, backgroundColor: AppColors.backgroundColor }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../Assets/arrow.png')} style={{ width: 22, height: 22 }} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{color:AppColors.blackText,marginRight:5,fontSize:20}}>Sohail.code</Text>
          <Image source={require('../Assets/arrow-down.png')} style={{ width: 16, height: 18 }} resizeMode='contain' />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {FriendsProfileData.map((item, index) => {
          return (
            <Animatable.View animation="zoomIn" duration={200} delay={index * 100} key={index}
              style={{ flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Image source={{ uri: item.profileImage }} style={{ width: 50, height: 50, borderRadius: 100 }} resizeMode='cover' />
                <View>
                  <Text style={{ color: AppColors.blackText, marginLeft: 10, fontWeight: '700' }}>{item.accountName}</Text>
                  <Text style={{ color: AppColors.grayText, marginLeft: 10, fontSize: 12 }}>{item.lastActivity}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image source={require('../Assets/camera-button.png')} style={{ width: 25, height: 25, tintColor: AppColors.grayText }} resizeMode='cover' />
              </TouchableOpacity>
            </Animatable.View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})