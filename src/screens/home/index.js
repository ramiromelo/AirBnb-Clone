import React from 'react';
import { 
   View, 
   ImageBackground, 
   Text,
   Pressable,
} from 'react-native';
import styles from './styles';

const HomeScreen = (props) => {
   return (
      <View>

         <Pressable
               style={styles.searchButton}
               onPress={() => console.warn('Explore Btn Clicked')}
         >
            <Text
               style={styles.buttonText}>
                  Where are you going?
            </Text>
         </Pressable>

         <ImageBackground 
            source={require('../../../src/assets/images/home_background.jpeg')} style={styles.image}
         >
            <Text style={styles.title}>
               MiroBnB
            </Text>
            <Pressable
               style={styles.button}
               onPress={() => console.warn('Explore Btn Clicked')}
            >
               <Text
                  style={styles.buttonText}>
                     Explore
               </Text>
            </Pressable>
         </ImageBackground>
      </View>
   )
}

export default HomeScreen;