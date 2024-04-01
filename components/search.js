import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar(){
    return(
        <View style = {styles.container}>  
            <View style = {styles.main}>
            <AntDesign  name="search1" size={24} color="#6F8793" />
            <TextInput  style = {styles.input}>search tasks</TextInput>
            </View>

            <View style = {styles.button}>
            <Ionicons name="git-pull-request-outline" size={28} color="#212832" />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginVertical: 20,
    },

    main:{
        width: 250,
        backgroundColor: '#455A64',
        height: 60,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        justifyContent: 'flex-start',
        borderRadius: 2,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#455A64",
        flexDirection: 'row'
    },

    input:{
        marginLeft:10,
        height: 60, 
        color: '#6F8793',
    },

    button:{
        height: 60,
        width: 60,
        backgroundColor: '#FED36A',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 11,
    }
})