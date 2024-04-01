import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { globalStlyes } from "../styles/global";
import { useState } from "react";

export default function AddTask(){
    const [text, setText] = useState('')
    const [taskDetails, setTaskDetails] = useState('')
    const [date, setDate] = useState('')

    const changeHandler = (val) =>{
        setText(val)
        setTaskDetails(val)
    }

    const dateHandler = (val) =>{
        setDate(val)
    }

    const taskHandler = (val) =>{
        setTaskDetails(val)
    }

    return(
        <View style={globalStlyes.container}>
            <KeyboardAvoidingView>
            <ScrollView>
                <Text style={styles.title}>Create New Task</Text>

                <View>
                    <Text style={styles.heading}>Task Title</Text>
                    <View style ={styles.input}>
                        <TextInput
                       onChangeText={changeHandler}
                        spellCheck = {true}
                        placeholderTextColor="gray"
                        placeholder="Enter task" />
                    </View>
                    
                </View>
                <View>
                    <Text style={styles.heading}>Task Details</Text>
                    <View style ={styles.inputMessage}>
                        <TextInput
                        placeholderTextColor="gray"
                        spellCheck = {true}
                       onChangeText={taskHandler}
                        multiline
                        style={styles.cursor}
                        placeholder="Enter task" />
                    </View>
                </View>
                <View>
                    <Text style={styles.heading}>Due Date</Text>
                    <View style ={styles.input}>
                        <TextInput
                        placeholderTextColor="gray"
                        style={styles.cursor}
                        onChangeText={dateHandler}
                        placeholder="month/day/year"/>
                    </View>
                </View>
                <TouchableOpacity onPress={() => console.log(text, date, taskDetails)}>
                    <View style={styles.button}>
                        <Text>Create</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        color: 'white',
        fontSize: 19,
        textAlign: 'center'
    },

    heading:{
        color: 'white',
        fontSize: 19,
        textAlign:'left',
        marginLeft: 17,
        marginTop: 20,
    },

    input:{
        borderColor: '#455A64',
        borderWidth: 1,
        backgroundColor: '#455A64',
        padding: 10,
        marginHorizontal: 17,
        marginVertical: 15,
        borderRadius: 2,
    },
    inputMessage:{
        borderColor: '#455A64',
        borderWidth: 1,
        backgroundColor: '#455A64',
        padding: 10,
        marginHorizontal: 17,
        marginVertical: 15,
        borderRadius: 2,
        minHeight: 100,
    },
    cursor:{
        color: "#FFF",

    },
    button:{
        backgroundColor:"#FED36A",
        alignItems:"center",
        height:40,
        justifyContent: 'center',
        marginHorizontal: 18,
        marginVertical: 20,
    }
})