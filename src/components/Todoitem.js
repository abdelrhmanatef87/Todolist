import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import react from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from 'react-native';
import AddTodo from './AddTodo';

export default function TodoItem ({item,  pressHandler,currentDate }) {
  
 
    return (

         <View>
           
            
           
            <View style = {styles.item}>
               {currentDate} 
            <Text style ={styles.itemText} >{item.text}</Text>
            <TouchableOpacity style = {styles.btns}>
                <TouchableOpacity style = {styles.btne} >
                <Button  
                        onPress =  {( ) => {

                        }} title="Edit"   color = {'black'}
                       
                        />
                </TouchableOpacity>
         

                        <Button  style = {styles.dbtn}
                        onPress =  {( ) => {
                            pressHandler(item.key)
                        }} title="delete"   color = {'#DB3441'}
                        />
            </TouchableOpacity>
            
      
    
            </View>
        </View>


    )
}

const styles = StyleSheet.create({

    item : {
        padding: 16 ,
        marginTop : 16 ,
        borderColor :"#bbb" ,
        borderWidth :1 ,
        borderRadius : 20,
        flexDirection :'row' ,
        justifyContent : 'space-between' ,
        backgroundColor:'white' ,

    } , 

    btns : {
        flexDirection : 'row' ,
            justifyContent : 'space-around' ,
                    
    } ,

    btne : {
        marginRight : 10 ,
    }

}) ;