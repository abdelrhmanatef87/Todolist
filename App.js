import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,Alert} from 'react-native';
import react, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-native';
import { FlatList, Modal } from 'react-native-web';
import Header  from './src/components/Header';
import TodoItem from './src/components/Todoitem';
import AddTodo from './src/components/AddTodo';
import { Edit } from 'react-native-feather';

export default function App() {
  
  const [todos ,setTodos] = useState ([
    {text: 'buy coffe' , key: '1'},
    {text: 'create an app' , key: '2'}, 
    {text: 'play a switch' , key: '3'} ,
  ]) ;



   

   

   
    
 

  const [currentDate ,setCurrentDate] =useState('');
  useEffect (() => {
    var date = new Date().getDate() ;
    var month = new Date().getMonth()+1 ;
    var year = new Date().getFullYear() ;
    var hours = new Date().getHours() ;
    var minutes = new Date().getMinutes() ;
    var seconds = new Date().getSeconds() ;
     
    setCurrentDate(
      date + '/' +month+ '/' +year +'.' +" "
      +hours+':'+minutes+':'+seconds ,

    );

  },[]) 

  

  const pressHandler = (key) => {
   


    alert("item deleted") 

    setTodos((prevTodos) => {

      return prevTodos.filter(todo => todo.key !=key );
    })
     


  }
 
  
  const submitHandler = (text)=> {

    if (text.length > 0) {
      setTodos((prevTodos) => {
        return[
          {text: text , key:Math.random().toString()},
          ...prevTodos 
        ] ;

       
      })
    }

    else {
   
      alert("empty !! you must add your activity")
    }

   }
  
  return(
    <View style ={styles.container}>
      <Header />
   <View style = {styles.content}>
    <AddTodo  submitHandler={submitHandler}/>
    <View style = {styles.list}>
        <FlatList 
      
        data={todos} 

        renderItem  ={({item}) => (
          <TodoItem item = {item}  currentDate ={currentDate}  pressHandler={pressHandler}  />
         ) }
          
         keyExtractor = {(item)=>item.key.toString()}

        />
     

       
    </View>
  </View>
</View>
  ) ;
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  content : {
      padding : 40 ,
  } ,

  list : {
    marginTop : 20 ,
  }





});
