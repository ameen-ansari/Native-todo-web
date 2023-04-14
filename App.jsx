import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { centerPngImg } from './assets/images/screenOneImgs/images';

function App() {
  return (
    <View style={style.parent}>
      <TouchableOpacity style={style.skipBtnTOT}>
        <LinearGradient
          useAngle={true}
          angle={0}
          colors={['#CD05FF', '#CFA1FE']}
          locations={[-1.7, 1.5]}
          style={style.skipBtn}>
          <Text style={style.skipBtnText}>skip</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Image
        source={centerPngImg}
        style={style.centerImage}
      />
      <Text style={style.manageTasksText}>Manage your Tasks</Text>
    </View>
  );
}

const style = StyleSheet.create({
  parent: {},
  skipBtn: {
    width: 80,
    height: 28,
    backgroundColor: '#8205FF',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  gradientBorder: {
    width: 100,
    height: 100,
  },
  skipBtnTOT: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 35,
    marginRight: 20,
  },
  centerImage:{
    width:355,
    height:406,
    marginTop:23,
    marginLeft:'auto',
    marginRight:'auto'
  },
  manageTasksText:{
    fontWeight:700,
    fontSize:22,
    lineHeight: 26,
    textAlign:'center',
    marginTop:22,
    color:'#000000'
  }
});

export default App;
