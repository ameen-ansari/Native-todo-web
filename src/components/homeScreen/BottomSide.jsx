import {
  View,
  ScrollView,
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  bg,
  plus,
  opt1,
  opt2,
  appType,
  men,
} from '../../../assets/images/homePage/images';
import {useNavigation} from '@react-navigation/native';
const BottomSide = () => {
  const navigation = useNavigation();

  const Ref = () => {
    Alert.alert('Action Not Included In Requirments');
  };

  const pushTasksPage = () => {
    navigation.navigate('TasksPage');
  };
  return (
    <ScrollView>
      <ImageBackground
        source={bg}
        style={{
          marginTop: '10%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity onPress={Ref}>
          <Image source={appType} />
        </TouchableOpacity>
        <TouchableOpacity onPress={Ref}>
          <Image source={opt1} />
        </TouchableOpacity>
        <View
          style={{
            position: 'relative',
            bottom: '10%',
          }}>
          <TouchableOpacity onPress={pushTasksPage}>
            <Image source={plus} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={Ref}>
          <Image source={opt2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={Ref}>
          <Image source={men} />
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};

export default BottomSide;
