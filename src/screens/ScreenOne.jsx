import {
    ScrollView,
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
  } from 'react-native';
  import LinearGradient from 'react-native-linear-gradient';
  import {
    heroPngImg,
    nextPngImg,
    bottomSidtBgPngImg,
  } from '../../assets/images/screenOneImgs/images';
  const {width} = Dimensions.get('window');
  
  function ScreenOne() {
    return (
      <ScrollView style={style.parent}>
        <TouchableOpacity style={style.skipBtnTO}>
          <LinearGradient
            useAngle={true}
            angle={0}
            colors={['#CD05FF', '#CFA1FE']}
            locations={[-1.7, 1.5]}
            style={style.skipBtn}>
            <Text style={style.skipBtnText}>skip</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Image source={heroPngImg} style={style.centerImage} />
        <Text style={style.manageTasksText}>Manage your Tasks</Text>
        <Text style={style.underManageTasksText}>
          Organise all your to-do’s andlist your projects. Color tag them to set
          priority and categories
        </Text>
        <TouchableOpacity>
          <Image source={nextPngImg} style={style.next} />
        </TouchableOpacity>
        <ImageBackground source={bottomSidtBgPngImg}>
          <Text style={style.back}>Back</Text>
          <View style={style.circlesParent}>
            <Text style={style.circles}></Text>
            <Text style={style.CenterCircles}></Text>
            <Text style={style.circles}></Text>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
  
  const style = StyleSheet.create({
    parent: {
      position: 'relative',
    },
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
    skipBtnTO: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginTop: 35,
      marginRight: 20,
    },
    centerImage: {
      width: 355,
      height: 406,
      marginTop: 23,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    manageTasksText: {
      fontWeight: 700,
      fontSize: 22,
      lineHeight: 26,
      textAlign: 'center',
      marginTop: 22,
      color: '#000000',
    },
    underManageTasksText: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 17,
      textAlign: 'center',
      marginTop: 16,
      color: '#5D6065',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: width * 0.7,
    },
    next: {
      marginRight: 'auto',
      marginLeft: 'auto',
      width: 67,
      width: 67,
      position: 'relative',
      top: 20,
    },
    back: {
      position: 'relative',
      zIndex: 0,
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 17,
      color: '#FFFFFF',
      marginTop: 17,
      marginLeft: 20,
    },
    circlesParent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 1,
      gap: 5,
      marginTop: 67,
      marginBottom: 30,
    },
    circles: {
      width: 12,
      height: 12,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: 50,
    },
    CenterCircles: {
      width: 12,
      height: 12,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: 50,
    },
  });
  
  export default ScreenOne;
  