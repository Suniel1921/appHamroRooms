import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const TabLayout = () => {
  return (
   <Tabs screenOptions={{tabBarActiveTintColor: '#7371f9'}}>
    <Tabs.Screen name='home' options={{title: 'Home',  tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />}}/>
    <Tabs.Screen name='postYourRooms' options={{title: 'Post Your Room', tabBarIcon: ({color, size})=> <FontAwesome size={28} name='plus' color={color}/>}}/>
    <Tabs.Screen name='profile' options={{title: 'Profile', tabBarIcon: ({color, size})=> <FontAwesome size={28} name='user' color={color}/>}}/>
   </Tabs>
  )
}

export default TabLayout