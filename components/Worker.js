import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import AttendIcon from 'react-native-vector-icons/AntDesign';
import UserIcon from 'react-native-vector-icons/AntDesign';
import SettingsIcon from 'react-native-vector-icons/SimpleLineIcons';
import React, {useState} from 'react';

const Worker = ({navigation}) => {

  

  return (
    <View style={styles.container}>
      <View style={styles.heading_div}>
        <Text style={styles.heading_text}>
          Welcome, <Text style={{color: 'black'}}>Employee!</Text>
        </Text>
      </View>
      <View style={styles.grid_view}>
        <View style={styles.home_view}>
          <TouchableOpacity
            style={styles.options_touchButtonActive}
            onPress={() => navigation.navigate('Marking')}>
            <AttendIcon name="calendar" style={styles.options_icon} />
            <Text style={{color: 'white'}}>Attendance</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.home_view}>
          <TouchableOpacity style={styles.options_touchButton}>
            <UserIcon name="user" style={styles.options_icon} />
            <Text style={{color: 'white'}}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.grid_view}>
        <View style={styles.home_view}>
          <TouchableOpacity style={styles.options_touchButtonSetting}>
            <SettingsIcon name="settings" style={styles.options_icon} />
            <Text style={{color: 'white'}}>Settings</Text>
          </TouchableOpacity>
        </View>
       
      </View>
      <View style={styles.grid_view}>
        
      </View>
    </View>
  );
};

export default Worker;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading_div: {
    marginBottom: 40,
  },
  heading_text: {
    fontSize: 26,
    marginTop: 40,
    color: '#296ecf',
  },
  grid_view: {
    flexDirection: 'row',
  },
  options_touchButtonActive:{
    borderRadius: 15,
    margin: 8,
    padding: 28,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 131,
    height: 130,
    backgroundColor:"#296ecf",
    borderColor:"white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
    
    
  },

  options_touchButton: {
    borderRadius: 15,
    margin: 8,
    padding: 28,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 131,
    height: 130,
    backgroundColor:"#296ecf",
    borderColor:"white",
    shadowColor: "#000",
    opacity:0.6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  options_touchButtonSetting:{
    borderRadius: 15,
    margin: 8,
    padding: 28,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 268,
    height: 130,
    backgroundColor:"#296ecf",
    borderColor:"white",
    shadowColor: "#000",
    opacity:0.6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  options_icon: {
    fontSize: 34,
    color: 'white',
  },
});
