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
import React, {useState} from 'react';
import CheckBtn from 'react-native-vector-icons/Ionicons';
import CheckBtn2 from 'react-native-vector-icons/Ionicons';
import ImageIcon from 'react-native-vector-icons/FontAwesome';
import AdminTable from '../../components/resuseablecomponents/AdminTable';
import axios from 'axios';
import moment from 'moment';

const MarkingCom = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [check, setChecked] = useState(false);
  const [checkout, setCheckOut] = useState('');
  const [check_in, setCheckIn] = useState('');
  const [userId, setUserId] = useState('');


 const PostCheckIn =()=>{
   let response = axios.post('https://presence-server.herokuapp.com/attendance/create_attendance',{
    check_in:'red',
    check_out:'reed',
  
   }).then((x)=>{
    console.log(x.data)
   })
   setChecked(true)
  }
  

  if (check === false) {
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
        <View style={styles.container}>
          <View style={styles.full_view}>
            <View style={styles.grid_view}>
              <View style={styles.user_detail}>
                <Text style={styles.detail_text}>Total Leaves: 2</Text>
              </View>
              <View style={styles.user_detail}>
                <Text style={styles.detail_text}>Total Attended: 18</Text>
              </View>
            </View>
            <View style={styles.grid_view}>
              <View style={styles.user_detail2}>
                <Text style={styles.detail_text}>Total Days: 30</Text>
              </View>
              <View style={styles.user_detail2}>
                <Text style={styles.detail_text}>Month: July</Text>
              </View>
            </View>
            <View style={styles.grid_view}>
            <Text style={styles.report_text_heading}>View Week Report</Text>
              <View style={styles}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.detail_btn_report}>
                <Text style={styles.report_text}>View</Text>
              </TouchableOpacity>
                
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.full_view2}>
            <View style={styles.grid_view_2}>
              <View style={styles.text_grid2}>
                <Text style={styles.detail_text_1}>Hi, Worker</Text>
              </View>
            </View>
            <View style={styles.grid_view}>
              <View style={styles.text_grid2}>
                <Text style={styles.detail_text_1}>Thursday</Text>
              </View>
              <View style={styles.text_grid2}>
                <Text style={styles.detail_text_1}>30 July 2022</Text>
              </View>
            </View>
            <View style={styles.grid_view}>
              <View style={styles.text_1_grid2}>
                <Text style={styles.detail_text_3}>
                  Touch this button to mark your Attendance.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={PostCheckIn}
              style={styles.detail_btn_plaincheck}>
              <Text style={styles.plaincheck_text}>
                Mark Attendance check-in
              </Text>
              <CheckBtn
                style={styles.checkbtn_plain}
                name="checkmark-circle-outline"
              />
            </TouchableOpacity>
            <View style={styles.instruction_view}>
            <Text style={{color:"white", fontSize:15}}>Instruction</Text>
              <Text style={styles.instruction_text}>
                1.Touch check-in button when you arrive at the site.
              </Text>
              <Text style={styles.instruction_text}>
                2.Upload image of the site.
              </Text>
              <Text style={styles.instruction_text}>
                3.Touch check-out button when you leave the site.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
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
  } else if (check === true) {
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
          <View style={styles.container}>
          <View style={styles.full_view}>
            <View style={styles.grid_view}>
              <View style={styles.user_detail}>
                <Text style={styles.detail_text}>Total Leaves: 2</Text>
              </View>
              <View style={styles.user_detail}>
                <Text style={styles.detail_text}>Total Attended: 18</Text>
              </View>
            </View>
            <View style={styles.grid_view}>
              <View style={styles.user_detail2}>
                <Text style={styles.detail_text}>Total Days: 30</Text>
              </View>
              <View style={styles.user_detail2}>
                <Text style={styles.detail_text}>Month: July</Text>
              </View>
            </View>
            <View style={styles.grid_view}>
            <Text style={styles.report_text_heading}>View Week Report</Text>
              <View style={styles}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.detail_btn_report}>
                <Text style={styles.report_text}>View</Text>
              </TouchableOpacity>
                
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.full_view2}>
          <View style={styles.grid_view_2}>
              <View style={styles.text_grid2}>
                <Text style={styles.detail_text_1}>Hi, Worker</Text>
              </View>
            </View>
            <View style={styles.grid_view}>
              <View style={styles.text_grid2}>
                <Text style={styles.detail_text_1}>Thursday</Text>
              </View>
              <View style={styles.text_grid2}>
                <Text style={styles.detail_text_1}>30 July 2022</Text>
              </View>
            </View>
            <View style={styles.grid_view}>
              <View style={styles.user_detail}>
                <Text style={styles.detail_text_2}>
                  Touch check-out button when you leave.
                </Text>
              </View>
              
            </View>
            <TouchableOpacity style={styles.detail_btn}>
              <Text style={styles.info_text}>Mark Attendance checked-in</Text>
              <CheckBtn2
                style={styles.checkbtn_green}
                name="checkmark-circle-sharp"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setChecked(false)}
              style={styles.detail_btn}>
              <Text style={styles.info_text}>Mark Attendance check-out</Text>
              <CheckBtn2
                style={styles.checkbtn_red}
                name="checkmark-circle-sharp"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setChecked(false)}
              style={styles.image_btn}>
              <ImageIcon style={styles.image_icon} name="photo" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
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
  }
};

export default MarkingCom;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  grid_view: {
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
    marginTop: 15,
    marginRight: 27,
  },
  grid_view_2: {
    flexDirection: 'row',
    marginTop: 24,
    marginRight: 27,
  },
  user_detail: {
    marginLeft: 32,
  },
  user_detail2:{
    marginLeft: 15,
    marginRight: 28,
  },
  detail_text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    alignContent:"center",
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center"
  },
  detail_text_2: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
  },
  detail_text_1: {
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
  
  },
  detail_text_3: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
    marginTop: 20,
  },
  text_grid2:{
marginLeft:28
  },
  text_1_grid2:{
marginLeft:28
  },
  


  detail_btn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    height: 53,
    width: 285,
    borderRadius: 200,
    alignSelf: 'center',
    backgroundColor: '#296ecf',
    marginTop: 20,
    backgroundColor: 'white',
  },
  detail_btn_plaincheck: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    height: 70,
    width: 275,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: '#296ecf',
    marginTop: 26,
    backgroundColor: 'white',
  },
  image_btn: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    height: 90,
    width: 285,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#296ecf',
    marginTop: 15,
    backgroundColor: 'white',
  },
  info_text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 3,
    color: '#296ecf',
    marginLeft: 30,
  },
  plaincheck_text: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 3,
    color: '#296ecf',
    marginLeft: 30,
  },
  full_view: {
    height: 200,
    width: 345,
    justifyContent: 'space-evenly',
    backgroundColor: '#296ecf',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  },
  full_view2: {
    height: 470,
    width: 342,

    backgroundColor: '#296ecf',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
  },
  checkbtn_plain: {
    color: '#296ecf',
    fontSize: 28,
    marginLeft: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  checkbtn_red: {
    color: 'red',
    fontSize: 28,
    marginLeft: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  image_icon: {
    color: '#296ecf',
    fontSize: 28,
    marginLeft: 120,
    alignItems: 'center',
    alignSelf: 'center',
  },
  checkbtn_green: {
    color: 'green',
    fontSize: 28,
    marginLeft: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  instruction_text: {
    color: 'white',
    marginTop: 5,
    textAlign:"left",
    fontSize:13
  },
  instruction_view:{
    paddingLeft:20,
    paddingTop:35
  },

  // modal css

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

  detail_btn_report: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    height: 33,
    width: 100,
    borderRadius: 200,
    marginLeft: 18,
    alignSelf: 'center',
    backgroundColor: '#296ecf',
    marginTop: 5,
    backgroundColor: 'white',
  },

  report_text: {
    marginLeft: 31,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 16,
    color: '#296ecf',
  },

  report_text_heading: {
    marginLeft: 25,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 16,
    color: 'white',
  },
  //   checkmark-circle-sharp
});
