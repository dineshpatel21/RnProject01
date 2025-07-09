import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'

const Child = () => {
  const onPressChild = ()=>{
    console.log("Main Child pressed on Main Page ! ljdfls lsjdlfsj lsdjfkljsdk d");
  }
  return (
    <View>
      <TouchableOpacity onPress={()=>{onPressChild()}}>Child</TouchableOpacity>
      <View>
        <Text>Hello</Text>
        <TouchableOpacity><Text>Clicked!</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Child

const styles = StyleSheet.create({})