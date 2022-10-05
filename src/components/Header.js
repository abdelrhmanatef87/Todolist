import { StyleSheet, Text, View } from 'react-native';
import react from 'react';

export default function Header () {
    return (<View style = {styles.header}>
        <Text style = {styles.title}>my Activities</Text>
    </View>) ;
}

const styles = StyleSheet.create({
  header : {
     height : 70 ,
     paddingTop : 20 ,
     backgroundColor : "#1B1C1C" ,
  } ,

  title : {
    textAlign : 'center' ,
    color : 'white' ,
    fontSize: 20 ,
    fontWeight : 'bold' ,
  }
});