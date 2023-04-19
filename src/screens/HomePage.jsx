import {View, ScrollView,Alert, Text, StyleSheet, Image} from 'react-native';
import MasonryListCompo from '../components/homeScreen/MasonryList';
import Navbar from '../components/homeScreen/Navbar';
import {clipboard, clock } from '../../assets/images/homePage/images';

const HomePage = () => {
  const showWarn = () => {
    Alert.alert('Next Action Not Included In Requirments')
  }
  return (
    <ScrollView style={style.parent}>
      <Navbar />
      <Text onPress={showWarn} style={style.myTasksText}>My Tasks</Text>
      <MasonryListCompo />
      <View style={{flexDirection: 'row', marginLeft: 19}}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 700,
              lineHeight: 29.4,
              color: '#6C6868',
              paddingBottom: 5,
            }}>
            On Going
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 700,
              lineHeight: 17.07,
              color: '#000000',
            }}>
            Startup website design with responsive
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 9, alignItems: 'center'}}>
            <Image source={clock} style={{width: 18, height: 18}}></Image>
            <Text
              style={{
                fontSize: 9,
                fontWeight: 400,
                lineHeight: 10.97,
                color: 'rgba(93, 96, 101, 0.5)',
                marginLeft: 5,
              }}>
              9:00AM - 12:00PM
            </Text>
          </View>
          <Text
            style={{
              width: 98,
              height: 22,
              backgroundColor: 'rgba(246, 163, 243, 0.28)',
              borderRadius: 5,
              color: '#F05CEA',
              fontSize: 12,
              fontWeight: 700,
              textAlign: 'center',
              marginTop: 27,
            }}>
            complete: 80%
          </Text>
        </View>
        <View style={{flex: 1,marginTop:5}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 14.63,
              color: 'rgba(255, 12, 100, 1)',
              textAlign: 'right',
              marginRight: 19,
            }}>
            See all
          </Text>
          <Image
            style={{alignSelf: 'center', marginTop: 25}}
            source={clipboard}></Image>
        </View>
      </View>
      <View>

      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  parent: {},
  myTasksText: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
    marginTop: 25,
    marginLeft: 20,
    color: '#000000',
  },
});

export default HomePage;
