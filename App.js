import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home, AddTask } from './screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { globalStlyes } from './styles/global';
import { Ionicons } from '@expo/vector-icons';
import Calendar from './screens/Calender';

const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    
   
    right: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#263238",
   
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
      name='Home'
       component={Home}
       options={{
        tabBarIcon: ({focused}) =>(
          <View style= {globalStlyes.icon}>
            <AntDesign name="home" size={24} color={focused ? '#FED36A' : '#617D8A'} />
            <Text style = {globalStlyes.iconText}>Home</Text>
          </View>
        )
       }
      }
       />

      <Tab.Screen 
      name='AddTask'
       component={AddTask}
        options={{
        tabBarIcon: ({focused}) =>(
          <View style= {globalStlyes.plusIcon}>
            <AntDesign name="plussquareo" size={24} color={focused ? '#617D8A' : '#617D8A'} />
            
          </View>
        )
       }
      }/>

      <Tab.Screen
       name='Notifications'
        component={Calendar}
        options={{
          tabBarIcon: ({focused}) =>(
            <View style= {globalStlyes.icon}>
              <AntDesign name="calendar" size={24} color={focused ? '#FED36A' : '#617D8A'} />
              <Text style = {globalStlyes.iconText}>Calendar</Text>
            </View>
          )
         }
        }/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


