import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Animated,
  Easing,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
} from 'react-native';
import {color} from 'react-native-reanimated';
import UserIcon from 'react-native-vector-icons/AntDesign';
import Lock from 'react-native-vector-icons/AntDesign';
import ClockIcon from 'react-native-vector-icons/Ionicons';
import TaskIcon from 'react-native-vector-icons/FontAwesome5';
import OptionIcon from 'react-native-vector-icons/Ionicons';
import LogoutIcon from 'react-native-vector-icons/AntDesign';
import AdminIcon from 'react-native-vector-icons/MaterialIcons';

import Admin from '../components/Admin';
import Worker from '../components/Worker';

const HomeScreen = ({navigation}) => {
  const [login, setLogin] = useState(false);
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const translation = useRef(new Animated.Value(0)).current;

  const openDrawer = () => {
    Animated.timing(translation, {
      toValue: 400,
      duration: 300,
      easing: Easing.in,
      useNativeDriver: true,
    }).start();
  };
  const closeDrawer = () => {
    Animated.timing(translation, {
      toValue: -580,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };


  
  if (!login) {
    return (
      <View style={styles.container_view}>
        <View style={styles.heading_one}>
          <Image
            source={require('../assets/images/Logo.png')}
            style={styles.logo_img}
          />
          <Text style={styles.tagline}>Welcome Back!</Text>
        </View>

        <View style={styles.input_view}>
          <UserIcon name="user" style={styles.creds_icon} />
          <TextInput
            style={styles.input}
            onChangeText={newText => setText(newText)}
            placeholder="Username"
          />
        </View>
        <View style={styles.input_view}>
          <Lock name="lock1" style={styles.creds_icon} />
          <TextInput
            onChangeText={newText => setText(newText)}
            style={styles.input}
            placeholder="Password"
          />
        </View>
        <Text style={{alignSelf: 'center', marginLeft: 40}}>{message}</Text>
        <View style={styles.login_view}>
          <TouchableOpacity
            style={styles.login_btn}
            onPress={() => setLogin(true)}>
            <Text style={styles.login_text}>Login</Text>
            <Text>{message}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.options_view}>
          <Text style={styles.options_text}>Create new account</Text>
          <Text style={styles.or}>or</Text>
          <Text style={styles.options_text}>Forgot password?</Text>
        </View>
      </View>
    );
  } else if (login) {
    if (text === 'Admin') {
      return (
        <>
          <Animated.View
            style={{
              backgroundColor: '#296ecf',
              position: 'absolute',
              zIndex: 1,
              height: '100%',
              width: '80%',
              transform: [{translateX: translation}],
              left: -400,
            }}>
            <View style={styles.menu_view}>
              <View>
                <View>
                  <Text style={styles.heading_top}>Presence App</Text>
                  <Text style={{height: 1, backgroundColor: 'white'}}></Text>
                </View>
              </View>

              <View style={styles.offcanvas_gird}>
                <View style={styles.offcanvas_options}>
                  <AdminIcon
                    name="admin-panel-settings"
                    style={styles.offcanvas_icons}
                  />
                </View>
                <View style={styles.offcanvas_options}>
                  <TouchableOpacity>
                    <Text style={styles.offcanvas_text}>Admin Settings</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.offcanvas_gird}>
                <View style={styles.offcanvas_options}>
                  <TaskIcon name="tasks" style={styles.offcanvas_icons} />
                </View>
                <View style={styles.offcanvas_options}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Tasks')}>
                    <Text style={styles.offcanvas_text}>Create Tasks</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.offcanvas_gird}>
                <View style={styles.offcanvas_options}>
                  <OptionIcon
                    name="options-outline"
                    style={styles.offcanvas_icons}
                  />
                </View>
                <View style={styles.offcanvas_options}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Options')}>
                    <Text style={styles.offcanvas_text}>Options</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.offcanvas_gird}>
                <View style={styles.offcanvas_options}  onTouchStart={closeDrawer} >
                  <LogoutIcon
                    name="logout"
                    style={styles.offcanvas_icons}
                  />
                </View>
                <View style={styles.offcanvas_options}>
                  <TouchableOpacity onPress={() => setLogin(false)}>
                    <Text style={styles.offcanvas_text}  onTouchStart={closeDrawer} >Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animated.View>

          <View onTouchStart={closeDrawer} style={{height: 400}}>
            <TouchableOpacity style={{backgroundColor: '#296ecf', height: 48}}>
              <Icon onPress={openDrawer} name="menu" style={styles.nav_icon} />
            </TouchableOpacity>
            <Text style={{height: 1, backgroundColor: 'silver'}}></Text>
            <View>
              <Admin navigation={navigation} />
            </View>
          </View>
        </>
      );
    } else if (text === 'Worker') {
      return (
        <>
          <Animated.View
            style={{
              backgroundColor: '#296ecf',
              position: 'absolute',
              zIndex: 1,
              height: '100%',
              width: '80%',
              transform: [{translateX: translation}],
              left: -400,
            }}>
            <View style={styles.menu_view}>
              <View>
                <View>
                  <Text style={styles.heading_top}>Presence App</Text>
                  <Text style={{height: 1, backgroundColor: 'white'}}></Text>
                </View>
              </View>

              <View style={styles.offcanvas_gird}>
                <View style={styles.offcanvas_options}>
                  <ClockIcon
                    name="time-outline"
                    style={styles.offcanvas_icons}
                  />
                </View>
                <View style={styles.offcanvas_options}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Timings')}>
                    <Text style={styles.offcanvas_text}>Timings</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.offcanvas_gird}>
                <View style={styles.offcanvas_options}>
                  <TaskIcon name="tasks" style={styles.offcanvas_icons} />
                </View>
                <View style={styles.offcanvas_options}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Tasks')}>
                    <Text style={styles.offcanvas_text}>Tasks</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.offcanvas_gird}>
                <View style={styles.offcanvas_options}>
                  <OptionIcon
                    name="options-outline"
                    style={styles.offcanvas_icons}
                  />
                </View>
                <View style={styles.offcanvas_options}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Options')}>
                    <Text style={styles.offcanvas_text}>Options</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.offcanvas_gird}>
                <View style={styles.offcanvas_options}  onTouchStart={closeDrawer} >
                  <LogoutIcon
                    name="logout"
                    style={styles.offcanvas_icons}
                  />
                </View>
                <View style={styles.offcanvas_options}>
                  <TouchableOpacity onPress={() => setLogin(false)}>
                    <Text style={styles.offcanvas_text}  onTouchStart={closeDrawer} >Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animated.View>
          <View onTouchStart={closeDrawer} style={{height: 400}}>
            <TouchableOpacity style={{backgroundColor: '#296ecf', height: 48}}>
              <Icon onPress={openDrawer} name="menu" style={styles.nav_icon} />
            </TouchableOpacity>
            <Text style={{height: 1, backgroundColor: 'silver'}}></Text>
            <View>
              <Worker navigation={navigation} />
            </View>
          </View>
        </>
      );
    }
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  nav_icon: {
    fontSize: 40,
    color: 'white',
    marginLeft: 10,
    marginTop: 4,
  },
  header_main: {
    height: 400,
    borderBottomWidth: 1,
  },
  offcanvas_text: {
    marginTop: 15,
    fontSize: 20,
    color: 'white',
  },
  menu_view: {
    margin: 10,
    padding: 10,
  },
  container_view: {
    flex: 1,
  },
  heading_one: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  tagline: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 40,
    color:"#296ecf"
  },
  logo_img: {
    height: 120,
    width: 120,
  },
  input_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingLeft: 12,
    marginTop: 10,
    marginBottom: 6,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'silver',
    width: 195,
  },
  creds_icon: {
    fontSize: 28,
    color:"#silver",
    padding: 10,
  },
  login_view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_btn: {
    backgroundColor: '#296ecf',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    width: 130,
    height: 43,
    paddingTop: 3,
    marginTop: 5,
  },
  login_text: {
    color: 'white',
    padding: 6,
    fontSize: 16,
    textAlign: 'center',
  },
  options_view: {
    marginTop: 70,
    alignItems: 'center',
  },
  options_text: {
    fontSize: 16,
  },
  heading_top: {
    color: 'white',
    fontSize: 25,
    marginTop: 15,
    marginBottom: 20,
  },
  offcanvas_gird: {
    flexDirection: 'row',
    marginTop: 4,
  },
  offcanvas_icons: {
    fontSize: 28,
    margin: 14,
    color: 'white',
  },
});

export default HomeScreen;
