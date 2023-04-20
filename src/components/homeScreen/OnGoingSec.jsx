import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {clipboard, clock} from '../../../assets/images/homePage/images';
import { GoingSecStyle as style } from '../../utils/homePage/Styles';

const OnGoingSec = () => {
  const Ref = () => {
    Alert.alert('Action Not Included In Requirments');
  };
  return (
    <ScrollView>
      <View style={{flexDirection: 'row', marginLeft: 19}}>
        <View style={{flex: 1}}>
          <Text style={style.onGoingText}>On Going</Text>
          <Text style={style.startUp}>
            Startup website design with responsive
          </Text>
          <View style={style.timeParent}>
            <Image source={clock} style={style.clockImg}></Image>
            <Text style={style.time}>9:00AM - 12:00PM</Text>
          </View>
          <TouchableOpacity>
            <Text onPress={Ref} style={style.statusInPer}>
              complete: 80%
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.seeAllSideParent}>
          <TouchableOpacity>
            <Text onPress={Ref} style={style.seeAllBtn}>
              See all
            </Text>
          </TouchableOpacity>
          <Image style={style.clipboardImg} source={clipboard}></Image>
        </View>
      </View>
    </ScrollView>
  );
};



export default OnGoingSec;
