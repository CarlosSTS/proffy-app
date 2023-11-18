import React from 'react';
import { StatusBar } from 'react-native'
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

export default function App() {

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return null
  }
    return (
      <>
        <AppStack />
        <StatusBar barStyle="light-content" backgroundColor="#8257E5" translucent />
      </>
    );
  }