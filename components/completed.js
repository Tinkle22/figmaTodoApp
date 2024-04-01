import { View, Text, ScrollView } from "react-native"
import { StyleSheet } from "react-native"
import { globalStlyes } from "../styles/global"
import CompletedJson from '../db/CompletedJson.json'
import { homeStyles } from "../styles/homestyle"


export default function CompletedTasks() {
    

    return(
        <View style= {globalStlyes.subHeadingContainer}>
            <View style= {globalStlyes.heading}>
                <Text style = {globalStlyes.subtitleText}>Completed Tasks</Text>
                <Text style = {globalStlyes.highlightText}>see all</Text>
            </View>
            <View>
                <ScrollView decelerationRate='fast' alwaysBounceHorizontal={true} horizontal>
                    {CompletedJson.map(ietm =>{
                        return (
                            <View key={ietm.key} style = {styles.scrollContainer}>
                                <View style ={styles.titleTextContainer}>
                                    <Text style = {globalStlyes.titleText}>{ietm.title}</Text>
                                </View>

                                <View style ={styles.completeSub}>
                                <Text style={globalStlyes.normalText}>Team Members</Text>
                                <Text style={globalStlyes.normalText}>{ietm.members}</Text>
                                </View>

                                <View>
                                    <View style ={styles.completeSub2}>
                                        <Text style= {globalStlyes.normalText}>Completed</Text>
                                        <Text style ={globalStlyes.boldText}>{ietm.complete}</Text>
                                    </View>
                                    <View style = {styles.bar}></View>
                                </View>

                            </View>
                        )
                    } )}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({


    scrollContainer:{
        backgroundColor: '#455A64',
        width: 183,
        height: 170,
        marginVertical: 15,
        marginLeft: 10,
        borderRadius: 2,
    },

    titleTextContainer:{
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginHorizontal: 5,

    },

    completeSub:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
        marginVertical: 15,
    },
    completeSub2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
        marginTop: 10,
    },

    bar:{
        alignSelf: 'center',
        height: 10,
        width:170,
        backgroundColor: 'white',
        marginHorizontal:15,
        borderRadius: 10,

    }
})
