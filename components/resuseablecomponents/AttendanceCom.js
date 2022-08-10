import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AdminTable from '../../components/resuseablecomponents/AdminTable';
import {Searchbar} from 'react-native-paper';
import axios from 'axios';

const AttendanceCom = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [users, setUsers] = React.useState([]);

  const onChangeSearch = query => setSearchQuery(query);

useEffect(() => {
 let response =axios.get('https://presence-app-server.herokuapp.com/user/get_users').then((x)=>{
  setUsers(x.data)
 })
}, [users])


  return (
    <>
      {modalVisible && (
        <View
          style={{
            position: 'absolute',
            opacity: 0.6,
            zIndex: 1,
            backgroundColor: 'grey',
            height: '100%',
            width: '100%',
          }}></View>
      )}

      <View>

        <View>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView>
        {users.map((item,index)=>{return(
          <View style={styles.grid_view}>
            <View style={styles.user_image}>
              <Image
                source={require('../../assets/images/user_img.jpg')}
                style={styles.user_img}
                />
            </View>
          
        

            <View style={styles.user_detail}>
              <Text style={styles.detail_text}>Name: John Doe</Text>
              <Text style={styles.detail_subtext}>
                Designation: Site Engineer
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.detail_btn}>
              <Text style={styles.info_text}>Info</Text>
            </TouchableOpacity>
          </View>
          )})}
        </ScrollView>
      </View>
      
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Info</Text>
              <AdminTable />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default AttendanceCom;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  grid_view: {
    flexDirection: 'row',
    marginTop: 14,
    marginRight: 15,
  },
  user_img: {
    height: 70,
    width: 70,
    borderRadius: 200,
  },
  user_detail: {
    marginTop: 12,
  },
  detail_text: {
    color: '#373737',
    marginLeft: 10,
    fontSize: 16,
  },
  detail_subtext: {
    color: '#737270',
    marginLeft: 10,
  },
  detail_btn: {
    borderWidth: 1,
    borderColor: 'white',
    height: 30,
    width: 70,
    borderRadius: 200,
    marginLeft: 18,
    alignSelf: 'center',
    backgroundColor: '#296ecf',
  },
  info_text: {
    textAlign: 'center',
    paddingTop: 3,
    color: 'white',
  },
  tableHeader: {
    backgroundColor: '',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#296ecf',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 60,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input_text: {
    borderColor: 'White',
  },
});
