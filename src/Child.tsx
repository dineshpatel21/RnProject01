import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Child = () => {
  const onPressChild = ()=>{
    console.log("branch 1 Child function  pressed! braaaaaaaaaaaaaaaaaaaaaaaanch");
  }
  return (
    <View>
      <TouchableOpacity onPress={()=>{onPressChild()}}>Child</TouchableOpacity>
      <Text>Hello Friend</Text>
    </View>
  )
}

export default Child

const styles = StyleSheet.create({})