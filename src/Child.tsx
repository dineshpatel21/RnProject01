import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'

const Child = () => {
  const onPressChild = ()=>{
    console.log("main Child pressed!");
  }
  return (
    <View>
      <TouchableOpacity onPress={()=>{onPressChild()}}>Child</TouchableOpacity>
    </View>
  )
}

export default Child

const styles = StyleSheet.create({})