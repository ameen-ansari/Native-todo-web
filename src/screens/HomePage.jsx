import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  menu,
  profile,
  card1,
  card2,
  card3,
  card4,
  arrow,
} from '../../assets/images/homePage/images';
import LinearGradient from 'react-native-linear-gradient';
// import MasonryList from 'react-native-seoul/masonry-list';

const HomePage = () => {
  // let data = [
  //   {
  //     data:'xyz',
  //     id:1
  //   },
  //   {
  //     data:'xyz',
  //     id:2
  //   },
  //   {
  //     data:'xyz',
  //     id:3
  //   },
  //   {
  //     data:'xyz',
  //     id:4
  //   },
  // ]
  return (
    <ScrollView style={style.parent}>
      <View style={style.navbar}>
        <View style={style.navs}>
          <TouchableOpacity>
            <Image style={style.menu} source={menu} />
          </TouchableOpacity>
          <Text style={style.date}>June 03, 2020</Text>
        </View>
        <TouchableOpacity>
          <Image source={profile} style={style.profile} />
        </TouchableOpacity>
      </View>
      <Text style={style.myTasksText}>My Tasks</Text>
      <View style={style.cardsParent}>
        <TouchableOpacity style={card1Style.card1TO}>
          <LinearGradient
            useAngle={true}
            angle={10.5}
            colors={['#FF005C', '#FF699F']}
            locations={[0.25, 0.75]}
            style={card1Style.card1}>
            <View style={card1Style.card1Child1}>
              <Image source={card1} style={card1Style.imgcard1} />
              <Text style={card1Style.card1Text1}>Mobile App Design</Text>
              <Text style={card1Style.card1Text2}>10 Tasks</Text>
            </View>
            <View style={{flex: 1, marginTop: 23}}>
              <Image source={arrow} style={card1Style.arrow} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={card2Style.card2TO}>
          <LinearGradient
            useAngle={true}
            angle={28.14}
            colors={['rgba(243, 104, 3, 0.99)', '#FFCA0F']}
            locations={[0.1742, 1.27]}
            style={card2Style.card2}>
            <View style={card2Style.card2Child1}>
              <Image source={card2} style={card2Style.imgcard2} />
              <Text style={card2Style.card2Text1}>Pending</Text>
              <Text style={card2Style.card2Text2}>16 Tasks</Text>
            </View>
            <View style={{flex: 1, marginTop: 23}}>
              <Image source={arrow} style={card1Style.arrow} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={card3Style.card3TO}>
          <LinearGradient
            useAngle={true}
            angle={23.37}
            colors={['#8205FF', '#CFA1FE']}
            locations={[0.262, 1.075]}
            style={card3Style.card3}>
            <View style={card3Style.card3Child1}>
              <Image source={card3} style={card3Style.imgcard3} />
              <Text style={card3Style.card3Text1}>Logo</Text>
              <Text style={card3Style.card3Text2}>2 Tasks</Text>
            </View>
            <View style={{flex: 1, marginTop: 106 }}>
              <Image source={arrow} style={card1Style.arrow} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={card4Style.card4TO}>
          <LinearGradient
            useAngle={true}
            angle={18.51}
            colors={['#00F0FF', 'rgba(0, 240, 255, 0.5)']}
            locations={[0.5452, 1]}
            style={card4Style.card4}>
            <View style={card4Style.card4Child1}>
              <Image source={card4} style={card4Style.imgcard4} />
              <Text style={card4Style.card4Text1}>Website Design</Text>
              <Text style={card4Style.card4Text2}>2 Tasks</Text>
            </View>
            <View style={{flex: 1, marginTop: 172 }}>
              <Image source={arrow} style={card1Style.arrow} />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <ScrollView>
      {/* <MasonryList
  data={data}
  keyExtractor={(item) => item.id}
  numColumns={2}
  showsVerticalScrollIndicator={false}
  renderItem={({item}) => <Text>{item.id}</Text>}
  refreshing={isLoadingNext}
  onRefresh={() => refetch({first: ITEM_CNT})}
  onEndReachedThreshold={0.1}
  onEndReached={() => loadNext(ITEM_CNT)}
/> */}
      </ScrollView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  navbar: {
    marginTop: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 19,
  },
  menu: {
    width: 40,
    height: 40,
  },
  date: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 15,
    marginLeft: 20,
  },
  profile: {
    width: 48,
    height: 48,
    marginRight: 20,
  },
  myTasksText: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 22,
    marginTop: 25,
    marginLeft: 20,
    color: '#000000',
  },
  cardsParent: {
    marginLeft: 20,
    marginTop: 16,
    flexDirection:'row',
    flexWrap:'wrap'
  },
});

const card1Style = StyleSheet.create({
  card1TO: {
    width: 166,
    height: 206,
  },
  card1: {
    width: 166,
    height: 206,
    borderRadius: 20,
    marginLeft: 0,
    flexDirection: 'row',
    position: 'relative',
  },
  card1Child1: {
    justifyContent: 'flex-end',
    flex: 4,
    alignItems: 'flex-start',
  },
  imgcard1: {
    width: 163,
    height: 177,
    position: 'absolute',
    top: -16,
    left: -19,
  },
  card1Text1: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 17,
    color: '#FFFFFF',
    marginLeft: 20,
    marginBottom: 11,
  },
  card1Text2: {
    fontSize: 9,
    fontWeight: 400,
    lineHeight: 11,
    color: '#FFFFFF',
    marginLeft: 20,
    marginBottom: 20,
  },
  arrow: {
    width: 21.9,
    height: 21.3,
  },
});

const card2Style = StyleSheet.create({
  card2TO:{
    width:156,
    height:145,
    borderRadius:20,
    marginLeft:11
  },
  card2:{
    width:156,
    height:145,
    borderRadius:20,
    flexDirection:'row',
    position:'relative'
  },
  card2Child1: {
    justifyContent: 'flex-end',
    flex: 4.5,
    alignItems: 'flex-start',
  },
  imgcard2:{
    width: 116,
    height: 118,
    position: 'absolute',
    top: -12,
    left: -11,
  },
  card2Text1: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 17,
    color: '#FFFFFF',
    marginLeft: 18,
    marginBottom: 25,
  },
  card2Text2: {
    fontSize: 9,
    fontWeight: 400,
    lineHeight: 11,
    color: '#FFFFFF',
    marginLeft: 18,
    marginBottom: 8,
  },

});

const card3Style = StyleSheet.create({
  card3TO:{
    width:157,
    height:135,
    marginTop:17,
    justifyContent:'flex-start',
    alignItems:'flex-start'
    },
  card3:{
    width:157,
    height:135,
    borderRadius:20,
    flexDirection:'row',
    position:'relative'
  },
  card3Child1: {
    justifyContent: 'flex-end',
    flex: 3.5,
    alignItems: 'flex-start',
  },
  imgcard3:{
    width: 127,
    height: 146,
    position: 'absolute',
    top: -29,
    left: -20,
  },
  card3Text1: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 17,
    color: '#FFFFFF',
    marginLeft: 17,
    marginBottom:15,
  },
  card3Text2: {
    fontSize: 9,
    fontWeight: 400,
    lineHeight: 11,
    color: '#FFFFFF',
    marginLeft: 17,
    marginBottom: 16,
  },

})

const card4Style = StyleSheet.create({
  card4TO:{
    width:156,
    height:206,
    marginTop:20,
    marginLeft:21,
  },
  card4:{
    width:156,
    height:206,
    borderRadius:20,
    flexDirection:'row',
    position:'relative',
    marginBottom:40,
  },
  card4Child1: {
    justifyContent: 'flex-end',
    flex: 3.5,
    alignItems: 'flex-start',
  },
  imgcard4:{
    width: 91,
    height: 106,
    position: 'absolute',
    top: 22,
    left:4,
  },
  card4Text1: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 17,
    color: '#FFFFFF',
    marginLeft: 18,
    marginBottom:10,
  },
  card4Text2: {
    fontSize: 9,
    fontWeight: 400,
    lineHeight: 11,
    color: '#FFFFFF',
    marginLeft: 18,
    marginBottom: 20,
  },

})

export default HomePage;
