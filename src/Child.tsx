import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Child = () => {
  const onPressChild = ()=>{
    console.log("branch1 child pressed!!");
  }
  return (
    <View>
      <TouchableOpacity onPress = {()=>{onPressChild()}} >Child</TouchableOpacity>
    </View>
  )
}

export default Child

const styles = StyleSheet.create({})