import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'

const Child = () => {
  const onPressChild = ()=>{
    console.log("Main Child pressed on Main Page ! ljdfls lsjdlfsj lsdjfkljsdk d");
  }
  return (
    <View>
      <TouchableOpacity onPress={()=>{onPressChild()}}>Child</TouchableOpacity>
      <Image source={require("../src/assets/photos/ambassador_emptystate.png")}/>
    </View>
  )
}

export default Child

const styles = StyleSheet.create({})