import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { globalStlyes } from "../styles/global";
import { useState } from "react";
import AddTask from "../screens/AddTask";

export default function OnGoingTask(){

    const [task, setTask] = useState([
        {"title": "Learn React Native", "complete": "100%","members": "6","date" : "22/09/24", "key": 1},
        {"title": "Complete JavaScript Course","complete": "80%", "members": "4", "date": "22/08/15", "key": 2},
        { "title": "Create UI Design Mockups", "complete": "50%", "members": "3", "date": "22/10/05", "key": 3 },
        {"title": "Write Blog Post",  "complete": "30%", "members": "2", "date": "22/07/30","key": 4},
        {"title": "Plan Vacation Trip", "complete": "10%", "members": "5", "date": "22/11/12", "key": 5},
        {"title": "Organize Home Office",  "complete": "70%", "members": "1", "date": "22/09/03",  "key": 6}
    ])

    const submitHandler = (text, taskDetails, date) =>{
        setTask((prevTasks) => {
            return [
                {title: text, key: Math.random().toString()},
                ...prevTasks
            ]
        })
    }

    return(
        <View style={globalStlyes.onGoingContainer}>
            <View style= {globalStlyes.heading}>
                <Text style = {globalStlyes.subtitleText}>Completed Tasks</Text>
                <Text style = {globalStlyes.highlightText}>see all</Text>
            </View>

            <FlatList
                data={task}
                renderItem={({item}) => (
                    <View  style = {styles.container}>
                    <Text style= {globalStlyes.titleText}>{item.title}</Text>
                    <View style = {styles.cardFormat}>
                        <View style= {styles.textContainer}>
                            <Text style={globalStlyes.normalText}>Team Members</Text>
                            <Text style ={globalStlyes.normalText}>{item.members}</Text>
                            <Text style ={globalStlyes.normalText}> Due on: {item.date}</Text>
                        </View>
                        <View>
                            <Text style={globalStlyes.normalText}>{item.complete}</Text>
                        </View>
                    </View>
                </View>
                )}
            />




        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#455A64',
        marginVertical: 10,
        marginHorizontal: 15,
        padding: 5,
        borderRadius: 2,
    }, 
    cardFormat:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textContainer:{
        justifyContent: 'space-around',
        height: 70,
    }
})