import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStlyes } from "../styles/global";
import { AntDesign } from '@expo/vector-icons';
import Dates from '../db/calendar.json'
import { useState } from "react";


export default function Calendar() {

    const [task, setTask] = useState([
        {"title": "Learn React Native", "complete": "100%","members": "6","date" : "22/09/24", "key": 1},
        {"title": "Complete JavaScript Course","complete": "80%", "members": "4", "date": "22/08/15", "key": 2},
        {  "title": "Create UI Design Mockups", "complete": "50%", "members": "3", "date": "22/10/05", "key": 3 },
        {"title": "Write Blog Post",  "complete": "30%", "members": "2", "date": "22/07/30","key": 4},
        {"title": "Plan Vacation Trip", "complete": "10%", "members": "5", "date": "22/11/12", "key": 5},
        {"title": "Organize Home Office",  "complete": "70%", "members": "1", "date": "22/09/03",  "key": 6}
    ])


    return(
        <View style={globalStlyes.container}>

            <View style={styles.header}>
                <Text style={globalStlyes.subtitleText}>Schedule</Text>
                <AntDesign name="plussquareo" size={24} color="white" />
            </View>

            <View style={styles.month}>
            <Text style={globalStlyes.titleText}>January</Text>
            </View>
            <ScrollView horizontal style={styles.height}>
               {Dates.map(dates=>{
                return(
                <View>
                    <View style={styles.dateContainer}>
                        <View style={styles.day}>
                            <Text style={globalStlyes.subtitleText}>{dates.date}</Text>
                            <Text style={styles.smallText}>{dates.day}</Text>
                        </View>
                    </View>
                </View>
                )
               })}
            </ScrollView>

               <FlatList
               data={task}
               renderItem={({item})=>(
                <View style={styles.flatList}>

                <View style={styles.taskContainerr}>
                    <View style={styles.yellowstrip}></View>
                    <View style={styles.taskContainer}>
                        <View style={styles.taskContainerDetails}>
                            <Text style={globalStlyes.subtitleText}>{item.title}</Text>
                            <Text style={globalStlyes.normalText}>{item.date}</Text>
                        </View>

                        <Text style={globalStlyes.normalText}>{item.members}</Text>
                    </View>
                </View>

                </View>
               )}
               />


           
        </View>


    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'center'
    },
    day:{
        height: 70,
        width: 55,
        backgroundColor: "#263238",
        alignItems: "center",
        justifyContent: 'space-around',
        paddingVertical: 10,
        marginHorizontal: 15,
    },

    smallText:{
        fontSize: 10,
        color: "#FFf"
    },

    dateContainer:{
        height: 100,
        justifyContent: 'space-between',
        marginHorizontal: 0,
        marginVertical: 0,
    },
     month:{
        marginVertical: 20,
        marginHorizontal: 15,
     },

     height:{
        maxHeight: 100,
        marginBottom:20,
     },

     taskContainer:{
        backgroundColor: '#263238',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: 320,
     },

     taskContainerDetails:{
        height: 70,
        justifyContent: 'space-between',
        paddingVertical: 10,
     },
    yellowstrip:{
        backgroundColor: '#FED36A',
        width: 10,
        height: 70,
    },
    taskContainerr:{
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 10,
    },

})