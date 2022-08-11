import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import {DataTable} from 'react-native-paper';

const AdminTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible_2, setModalVisible_2] = useState(false);
  const [attendance, setAttendance] = useState([]);
  const [load, setLoad] = useState([false]);

  useEffect(() => {
    let response = axios
      .get(
        'https://presence-app-server.herokuapp.com/attendance/get_attendance',
        {
          headers: {
            id: '276e2869-0b93-4697-9d65-ea8f1bc2f3e1',
          },
        },
      )
      .then(x => {
        setAttendance(x.data);
        setLoad(false);
      });
  }, [attendance]);

  const renderData = () => {
    if (load != false) {
      return (
        <View style={{width: 300, height:236}} >
             <ActivityIndicator size="large" style={{justifyContent:"center", marginTop:100}} color='#296ecf' />
        </View>
      );
    }
  return (
    <View style={{width: 300, height:236}}>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title numeric>Check-in</DataTable.Title>
            <DataTable.Title numeric>Check-out</DataTable.Title>
            <DataTable.Title numeric>Image</DataTable.Title>
          </DataTable.Header>

          {attendance.map((item, index) => {
            return (
              <ScrollView key={index}>
              <DataTable.Row >
                <DataTable.Cell>{item.day}</DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text style={styles.check_in_time}>
                    {item.check_in}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text style={styles.check_in_time}>
                    {item.check_out}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={styles.img_btn}>
                    <Text style={styles.text_btn}>View</Text>
                  </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
              </ScrollView>
            );
          })}
        </DataTable>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  style={styles.img}
                  source={require('../../assets/images/img.jpg')}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible_2}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={{marginBottom: 100, marginTop: 200}}>
                  No Image!
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible_2(!modalVisible_2)}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};
  return renderData();
};

export default AdminTable;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  img: {
    height: 320,
    width: 320,
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
    height: 475,
    width: 369,
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    marginTop: 10,
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
  check_in_time: {
    color: 'green',
    fontSize:13
  },
 
});
