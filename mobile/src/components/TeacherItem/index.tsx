import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png'
import styles from './styles';

export default function TeacherItem() {
  const [isFavorited, setIsFavorited] = useState(true)
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
      <Image style={styles.avatar}
      source={{uri: 'https://avatars.githubusercontent.com/u/63306370?v=4'}}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>CarlosSTS</Text>
        <Text style={styles.subject}>Computer</Text>
        </View>        
      </View>

      <Text style={styles.bio}>
        Programador mobile react-native.
        {'\n'} {'\n'}
        Apaixonado pelas tecnologias do mundo javaScript
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 908</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton 
            onPress={() =>{}}
            style={[
              styles.favoriteButton, 
              isFavorited ? styles.favorited : {},
            ]}
          >
            { isFavorited 
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} />
            }
          </RectButton>

          <RectButton onPress={() =>{}} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
    
    </View>
    </View>
    </View>
  )
}
