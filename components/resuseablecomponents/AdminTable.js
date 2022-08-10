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
} from 'react-native';
import {DataTable} from 'react-native-paper';


const AdminTable = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible_2, setModalVisible_2] = useState(false);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {

    let response =axios.get('https://presence-app-server.herokuapp.com/attendance/get_attendance',{ headers: {
      'id': '1f3f7a37-feaa-4017-951f-55485f4f5527'
    }}).then((x)=>{
      setAttendance(x.data)
    })
   }, [attendance])
  
  return (
    <View style={{width: 300}}>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title numeric>Check-in</DataTable.Title>
            <DataTable.Title numeric>Check-out</DataTable.Title>
            <DataTable.Title numeric>Image</DataTable.Title>
          </DataTable.Header>

        {attendance.map((item,index)=>{return(
          <DataTable.Row  key={index}>
            <DataTable.Cell>{item.check_in.slice(0,9)}</DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={styles.check_in_time}>{item.check_in.slice(18,25)}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
            <Text style={styles.check_in_time}>{item.check_out.slice(18,25)}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.img_btn}>
                <Text style={styles.text_btn}>View</Text>
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>
)})}

        
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

export default AdminTable;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  img: {

height:320,
width:320
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
    marginTop:10,
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
  },
  check_in_time2: {
    color: 'green',
  },
  check_in_time3: {
    color: 'red',
  },
  check_in_time4: {
    color: 'red',
  },
  check_in_time5: {
    color: 'green',
  },

  check_out_time: {
    color: 'green',
  },
  check_out_time2: {
    color: 'green',
  },
  check_out_time3: {
    color: 'red',
  },
  check_out_time4: {
    color: 'red',
  },
  check_out_time5: {
    color: 'red',
  },
});
