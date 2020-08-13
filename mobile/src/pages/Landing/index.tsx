import React from 'react';
import { Text, View, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

import LandingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/icons/study.png';
import giveClassesIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';

function Landing() {
const {navigate} = useNavigation();

function handleNavigationGiveClassesPage(){
    navigate('GiveClasses')
}

function handleNavigationStudy(){
navigate('Study')
}

    return (

        <View style={styles.container}>
            <Image style={styles.banner} source={LandingImg} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigationStudy} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar </Text>
                </RectButton>

                <RectButton onPress={handleNavigationGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />

                    <Text style={styles.buttonText}>Dar aulas </Text>
                </RectButton>
            </View>
            <Text style={styles.totalConexoes}>
                Total de 298 conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>

        </View>
    );
}


export default Landing;