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
        <Text>Today</Text>
        <Text>Tommarow</Text>
        <Text>Mangel Pandey</Text>
        <Text>hello i am dinesh patel and i react native developer. asldkjklsa  alsdjlkfk alkdsjkl </Text>
        <Text>sjdlfsjd alsjdl alajdsl falsldfjla </Text>
        <Text>slkdjflksa lasjjdlfj asldjfla sldjflasjd flsddjflsdj flsdjflds</Text>
        <Text>yes your name is what?</Text>
        <Text>Yes it is india. i am from chhattisagarh.</Text>
        <Text>ok hello this dinesh patel who is surrendering to god. who believe let life heppens.</Text>
      </View>
    </View>
  )
}

export default Child

const styles = StyleSheet.create({})