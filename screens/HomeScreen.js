import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { posts } from '../data/posts'
import Bottom, { bottomTabIcons } from '../components/home/Bottom'


const HomeScreen = ({navigation}) => {
  return (
    /**
     * in order to readable for the componenet - SafeAreaView
     */
    <SafeAreaView style = {styles.container}>  
      <Header navigation = {navigation}/>
      <Stories/>
      <ScrollView>
          {posts.map((post, index) => (
            <Post post = {post} key = {index} />
          ))}
      </ScrollView>
      <Bottom icons = {bottomTabIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})

export default HomeScreen