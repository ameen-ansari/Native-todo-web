import LinearGradient from 'react-native-linear-gradient';
import MasonryList from '@react-native-seoul/masonry-list';
const {width} = Dimensions.get('window');
import {
  card1,
  card2,
  card3,
  card4,
  arrow,
} from '../../../assets/images/homePage/images';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const MasonryListCompo = () => {
  const data = [
    {
      data: 'xyz',
      id: 1,
      height: 206,
      angle: 10.5,
      colorsOfLG: ['#FF005C', '#FF699F'],
      locationssOfLG: [0.25, 0.75],
      text1: 'Mobile App Design',
      text2: '10 Tasks',
      image: card1,
      imgStyle: {
        width: 163,
        height: 177,
        position: 'absolute',
        top: -16,
        left: -19,
      },
      arrowRef: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 23,
      },
    },
    {
      data: 'xyz',
      id: 2,
      height: 145,
      angle: 28.14,
      colorsOfLG: ['rgba(243, 104, 3, 0.99)', '#FFCA0F'],
      locationssOfLG: [0.1742, 1.27],
      text1: 'Pending',
      text2: '16 Tasks',
      image: card2,
      imgStyle: {
        width: 116,
        height: 118,
        position: 'absolute',
        top: -12,
        left: -11,
      },
      arrowRef: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 23,
      },
    },
    {
      data: 'xyz',
      id: 3,
      height: 135,
      angle: 23.37,
      colorsOfLG: ['#8205FF', '#CFA1FE'],
      locationssOfLG: [0.262, 1.075],
      text1: 'Logo',
      text2: '2 Tasks',
      image: card3,
      imgStyle: {
        width: 127,
        height: 146,
        position: 'absolute',
        top: -29,
        left: -20,
      },
      arrowRef: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 11,
      },
    },
    {
      data: 'xyz',
      id: 4,
      height: 206,
      angle: 18.51,
      colorsOfLG: ['#00F0FF', 'rgba(0, 240, 255, 0.5)'],
      locationssOfLG: [0.5452, 1],
      text1: 'Website Design',
      text2: '2 Tasks',
      image: card4,
      imgStyle: {
        width: 91,
        height: 106,
        position: 'absolute',
        top: 22,
        left: 4,
      },
      arrowRef: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 11,
      },
    },
  ];
  const styleOfCard = {
    LG: {
      width: width * 0.45,
      borderRadius: 20,
      marginLeft: '5%',
      marginVertical: 10,
      flexDirection: 'row',
      position: 'relative',
    },
    subParent1: {
      justifyContent: 'flex-end',
      flex: 4,
      alignItems: 'flex-start',
    },
    text1: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 17,
      color: '#FFFFFF',
      marginLeft: 20,
      marginBottom: 11,
    },
    text2: {
      fontSize: 9,
      fontWeight: 400,
      lineHeight: 11,
      color: '#FFFFFF',
      marginLeft: 20,
      marginBottom: 20,
    },
    imgSizeManager: {
      width: 21.9,
      height: 21.3,
    },
  };
  return (
    <ScrollView style={{width: width * 1}}>
      <MasonryList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity style={{width: width * 0.45}}>
            <LinearGradient
              useAngle={true}
              angle={item.angle}
              colors={item.colorsOfLG}
              locations={item.locationsOfLG}
              style={[styleOfCard.LG, {height: item.height}]}>
              <View style={styleOfCard.subParent1}>
                <Image source={item.image} style={item.imgStyle} />
                <Text style={styleOfCard.text1}>{item.text1}</Text>
                <Text style={styleOfCard.text2}>{item.text2}</Text>
              </View>
              <View style={item.arrowRef}>
                <Image source={arrow} style={styleOfCard.imgSizeManager} />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default MasonryListCompo;
