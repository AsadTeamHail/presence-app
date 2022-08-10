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
import RefreshIcon from 'react-native-vector-icons/SimpleLineIcons';
import PdfIcon from 'react-native-vector-icons/AntDesign';
import InfoIcon from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';

const Worker = ({navigation}) => {
  const [login, setLogin] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.heading_div}>
        <Text style={styles.heading_text}>
          Welcome, <Text style={{color: 'black'}}>Worker!</Text>
        </Text>
      </View>
      <View style={styles.grid_view}>
        <View style={styles.home_view}>
          <TouchableOpacity
            style={styles.options_touchButton}
            onPress={() => navigation.navigate('Marking')}>
            <AttendIcon name="calendar" style={styles.options_icon} />
            <Text style={{color: 'white'}}>Marking</Text>
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
          <TouchableOpacity style={styles.options_touchButton}>
            <SettingsIcon name="settings" style={styles.options_icon} />
            <Text style={{color: 'white'}}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.home_view}>
          <TouchableOpacity style={styles.options_touchButton}>
            <RefreshIcon name="refresh" style={styles.options_icon} />
            <Text style={{color: 'white'}}>Refresh</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.grid_view}>
        <View style={styles.home_view}>
          <TouchableOpacity style={styles.options_touchButton}>
            <PdfIcon name="pdffile1" style={styles.options_icon} />
            <Text style={{color: 'white'}} >Download</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.home_view}>
          <TouchableOpacity style={styles.options_touchButton}>
            <InfoIcon name="infocirlceo" style={styles.options_icon} />
            <Text style={{color: 'white'}}>Info</Text>
          </TouchableOpacity>
        </View>
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
