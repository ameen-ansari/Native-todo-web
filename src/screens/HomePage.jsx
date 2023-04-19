import {ScrollView, Text, StyleSheet} from 'react-native';
import MasonryListCompo from '../components/homeScreen/MasonryList';
import Navbar from '../components/homeScreen/Navbar';
import BottomSide from '../components/homeScreen/BottomSide';
import OnGoingSec from '../components/homeScreen/OnGoingSec';
import { style } from '../utils/homePage/Styles';

const HomePage = () => {
  return (
    <ScrollView style={style.parent}>
      <Navbar />
      <Text style={style.myTasksText}>My Tasks</Text>
      <MasonryListCompo />
      <OnGoingSec />
      <BottomSide />
    </ScrollView>
  );
};



export default HomePage;
