import LinearGradient from 'react-native-linear-gradient';
import MasonryList from '@react-native-seoul/masonry-list';
import {arrow} from '../../../assets/images/homePage/images';
import {data} from '../../utils/homePage/masnaryListData';
import {masonaryLstStyle as style} from '../../utils/homePage/Styles';
const {width} = Dimensions.get('window');
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';

const MasonryListCompo = () => {
  const Ref = () => {
    Alert.alert('Action Not Included In Requirments');
  };
  return (
    <ScrollView style={{width: width * 1}}>
      <MasonryList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity style={{width: '90%'}} onPress={Ref}>
            <LinearGradient
              useAngle={true}
              angle={item.angle}
              colors={item.colorsOfLG}
              locations={item.locationsOfLG}
              style={[style.LG, {height: item.height}]}>
              <View style={style.subParent1}>
                <Image source={item.image} style={item.imgStyle} />
                <Text style={style.text1}>{item.text1}</Text>
                <Text style={style.text2}>{item.text2}</Text>
              </View>
              <View style={item.arrowRef}>
                <Image source={arrow} style={style.imgSizeManager} />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default MasonryListCompo;
