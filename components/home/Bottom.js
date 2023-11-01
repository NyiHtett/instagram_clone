import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
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
  },
  {
    name: 'profile',
    active: 'https://pyxis.nymag.com/v1/imgs/4cd/212/81283ed5194911027fd285de7b326616f0-04-end-of-the-world.1x.rsocial.w1200.jpg',
    inactive: 'https://pyxis.nymag.com/v1/imgs/4cd/212/81283ed5194911027fd285de7b326616f0-04-end-of-the-world.1x.rsocial.w1200.jpg',
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
    style = {[
      styles.icon,
      icon.name == 'profile' ? styles.profilePic() : null,
      //style for the profile when it's clicked
      activeTab == 'profile' && icon.name === activeTab ? 
      styles.profilePic(activeTab) : null,
      ]}/>
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
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 999,
    backgroundColor: '#000'
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
  },
  /**
   * dynamic profile
   */
  profilePic: (activeTab = '') =>  ({
    borderRadius: 50, 
    borderWidth: activeTab === 'Profile' ? 2 : 0,
    borderColor: '#fff',
  }),
  })

export default Bottom