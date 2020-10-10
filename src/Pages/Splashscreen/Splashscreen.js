import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, Alert, TouchableHighlight} from 'react-native'

export default function Splashscreen() {
  return (

    
    <ImageBackground source={require('../../assets/images/bgImage.png')} style={styles.backgroundImage}> 
    <View style={styles.maskBlack}  opacity={0.5}>
    {/* <View style={styles.container}> */}
    <View style={styles.content}>
      {/* <View style={styles.text_wraper}> */}
      <View></View>
        <View style={styles.container_judul}>
          <Text style={styles.h1}>
            TRAVELER
          </Text>
          <Text style={styles.h4}>
            Share the World and become an amazing traveler
          </Text>
        </View>

        <View style={styles.container_button}>
          {/* <Button
          style={styles.button_login}
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        /> */}

        <TouchableHighlight
          style={styles.submit}
          onPress={() => Alert.alert('Simple Button pressed')}
          underlayColor='#fff'>
            <Text style={styles.submitText}>Already a member?</Text>
        </TouchableHighlight>
        </View>

        <View style={styles.container_footer}>
          
        <TouchableHighlight
          style={styles.submitNewMember}
          onPress={() => Alert.alert('Simple Button pressed')}
          underlayColor='#fff'>
            <Text style={styles.submitText}>New Member</Text>
        </TouchableHighlight>
        </View>
       
      {/* </View> */}
    </View>
    {/* </View> */}
    </View>
    </ImageBackground>

  )
  
}

const styles = StyleSheet.create({
  container : {},
  content: {
    // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
  },
  maskBlack: {
    backgroundColor: '#292929',
    width: '100%', 
    height: '100%',
    // display: "flex",
    
  },
  backgroundImage: {
    width: '100%', 
    height: '100%',
  },
  container_judul:{
  alignItems: 'center',
  marginTop: 430,
  },
  container_button:{
    marginTop: 90,
  },
  button_login: {
    borderRadius:10,
  },
  submit:{
    width: 230,
    marginRight:40,
    marginLeft:40,
    // marginTop:5,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#52E4C4',
    borderRadius:30,
    borderWidth: 1,
    // borderColor: '#fff'
  },
  submitNewMember:{
    width: 90,
    marginRight:40,
    marginLeft:40,
    // marginTop:5,
    paddingTop:20,
    paddingBottom:20,
    
    borderRadius:10,
    // borderWidth: 1,
  },
  submitText:{
    color:'#fff',
    textAlign:'center',
    textDecorationLine: 'underline',
},
h1: {
    color: "white",
    fontSize: 50,
    
    fontWeight: "bold",
    // alignItems: "center"
  },
  h4: {
    color: "white",
    fontSize: 15,
  },
  container_footer:{
marginTop: 100,
  },

})
