import {ScrollView, Text, StyleSheet} from 'react-native';
import MasonryListCompo from '../components/homeScreen/MasonryList';
import Navbar from '../components/homeScreen/Navbar';

const HomePage = () => {
  return (
    <ScrollView style={style.parent}>
      <Navbar />
      <Text style={style.myTasksText}>My Tasks</Text>
      <MasonryListCompo />
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
