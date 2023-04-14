import {
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import ScreenOne from './src/screens/ScreenOne';
const {width} = Dimensions.get('window');

function App() {
  return (
    <ScrollView style={style.parent}>
      <ScreenOne />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  parent:{
    
  }
});

export default App;
