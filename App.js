import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignedInStack from './navigation';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';

export default function App() {
  return <SignedInStack/>
}

