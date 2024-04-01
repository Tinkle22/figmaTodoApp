import { Platform, StyleSheet } from "react-native"

export const globalStlyes = StyleSheet.create({
    container:{
        backgroundColor: '#212832',
        flex: 1,
        paddingTop: 35,
    },

    icon:{
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconText:{
        fontSize: 12,
        color: '#617D8A'
    },

    plusIcon:{
        top:  Platform.OS == 'ios' ? -10 :-20,
        width: Platform.OS == 'ios' ? 50 : 60,
        height: Platform.OS == 'ios' ? 50: 50,
        borderRadius: Platform.OS == 'ios' ? 4: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FED36A",
    },

    highlightText:{
        fontSize: 11,
        color: '#FED36A'
    },

    titleText:{
        fontSize: 21,
        color: '#fff',
        textAlign: 'justify',
        fontWeight: 'bold',
    },

    subtitleText:{
        fontSize: 16,
        color: "#fff"
    },

    normalText:{
        color: "#fff"
    },

    boldText:{
        color: "#fff",
        fontWeight: "bold",
    },

    heading:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 20,
    },

    subHeadingContainer:{
        justifyContent: 'space-between',
        maxHeight: 175,
        marginStart: 10,
    },

    onGoingContainer:{
        justifyContent: 'space-between',
        maxHeight: 140,
        marginTop: 50,
    }

})