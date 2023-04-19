import {
  ScrollView,
  View,
  Text,
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
import {useNavigation} from '@react-navigation/native';
import {style} from '../utils/screenOne/styles';

function ScreenOne() {
  const navigation = useNavigation();
  const pushHomePage = () => {
    navigation.navigate('Home');
  };
  return (
    <ScrollView style={style.parent}>
      <TouchableOpacity style={style.skipBtnTO}>
        <LinearGradient
          useAngle={true}
          angle={0}
          colors={['#CD05FF', '#CFA1FE']}
          locations={[-1.7, 1.5]}
          style={style.skipBtn}>
          <Text style={style.skipBtnText} onPress={pushHomePage}>
            skip
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <Image source={heroPngImg} style={style.centerImage} />
      <Text style={style.manageTasksText}>Manage your Tasks</Text>
      <Text style={style.underManageTasksText}>
        Organise all your to-do’s andlist your projects. Color tag them to set
        priority and categories
      </Text>
      <TouchableOpacity onPress={pushHomePage}>
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

export default ScreenOne;
