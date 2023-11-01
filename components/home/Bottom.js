import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState} from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
    inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
  },
  {
    name: 'Shop',
    active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
    inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
  }
]

const Bottom = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home');

  /**
   * use the Icon component just to fomat in the return 
   */
  const Icon = ({icon}) => (
    <TouchableOpacity onPress={()=> setActiveTab(icon.name)}>
    <Image source = {{uri: activeTab === icon.name ? icon.active : icon.inactive}} 
    style = {styles.icon}/>
    </TouchableOpacity>
  )
  return (
    <View style = {styles.wrapper}>
      <Divider width={1} orientation='vertical'/>
      <View style = {styles.container}>
      {icons.map((icon,index) => (
        <Icon key = {index} icon = {icon}></Icon>
      ))}
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    //put the icons down
    paddingTop: 10, 
  },
  icon: {
    width: 30,
    height: 30,
  }
})

export default Bottom