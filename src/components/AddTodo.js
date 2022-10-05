import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import react from 'react';
import { useState } from 'react';
export default function AddTodo ({submitHandler } ) {
   
   const [text ,setText] = useState('') ;


    const changeHandler = (val) => {
    setText(val) ;
   }

    return (
        <View>
            <TextInput

                style= {styles.input}
                placeholder='new Activity .....' 
                onChangeText={changeHandler}
                
            />

            <Button onPress={() => {
                submitHandler(text);
            }} title ='add Activity' 
            color='#1B1C1C' 
              />
        </View>
    ) ;
}

const styles = StyleSheet.create({
    
    input : {
        marginBottom : 10 , 
        paddingHorizontal : 8 , 
        paddingVertical : 6 , 
        borderWidth : 3 ,
        borderColor : '#ddd' ,
        borderRadius : 20 ,
        backgroundColor:'white' ,
    } ,

}) ;