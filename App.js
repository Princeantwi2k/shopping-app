import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './assets/Component/Tasks';


export default function App() {


  const [task, settask] = useState();

  const [tasksitems, settasksitems] = useState([])

  const handleAddTask = () =>{

    Keyboard.dismiss()
    settasksitems([...tasksitems,task])
    settask(null)
  }

const completeTask = (index)=>{
  let itermsCopy = [...tasksitems];
  itermsCopy.splice(index) 
  settasksitems(itermsCopy)
}


  return (
    <View style={styles.container}>
    {/* todays task */}
    <View style={styles.taskwrapper}>
      <Text style={styles.section}>My Task for the day</Text>
    </View>

<View style={styles.item}>
  {/* this is where the tasks will go  */}
{
  tasksitems.map((item ,index)=>{
  return(  
    
    <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
      <Tasks  text={item} />
    </TouchableOpacity>
    
    )
  })
}
{/* <Tasks text={'task 1'} />
<Tasks text={'task 2'} /> */}
</View>

{/* write a task */}
<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding":"height"} style={styles.wrietaskWrapper}  >
  <TextInput style={styles.input} placeholder={'write a task'} value={task}  onChangeText={text=>settask(text)}/>
<TouchableOpacity onPress={()=>handleAddTask()}>
  <View style={styles.addWrapper}>
 <Text style={styles.addText} >+</Text>
  </View>
</TouchableOpacity>
</KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  taskwrapper:{
paddingTop:80,
paddingHorizontal:20,
fontSize:24
  },
  section:{
    fontSize:24,
    fontWeight:"bold"
  },
  item:{
    marginTop:30
  },
  wrietaskWrapper:{
    position:"absolute",
    bottom:60,
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"


  },
  input:{
    paddingHorizontal:15,
    paddingVertical:15,
    backgroundColor:"#fff",
    borderRadius:60,
    width:250,
    borderColor:"#5F2585",
    borderWidth:1
    

  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#5F2585",
    borderWidth:1,
    borderRadius:60
  },
  addText:{}
});
