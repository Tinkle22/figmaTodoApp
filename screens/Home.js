import { View, Text, StyleSheet } from "react-native";
import { globalStlyes } from "../styles/global";
import { Ionicons } from '@expo/vector-icons';
import { homeStyles } from "../styles/homestyle";
import SearchBar from "../components/search";
import CompletedTasks from "../components/completed";
import OnGoingTask from "../components/ongoingTasks";

export default function Home() {
    return(
        <View style = {globalStlyes.container}>

            <View style= {styles.container}>
            <View style = {homeStyles.container}>
                <View>
                    <Text style ={globalStlyes.highlightText}> Welcome Back</Text>
                    <Text style = {globalStlyes.titleText}>Mutale Lesa</Text>
                </View>

                <View>
                <Ionicons name="person-circle-outline" size={45} color="#FED36A" />
                </View>
            </View>

            <SearchBar/>
            </View>

            <CompletedTasks/>
            
            <OnGoingTask/>

        </View>
    )
}

const styles = StyleSheet.create({
    flex: 1,
})