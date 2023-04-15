import {
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import HomePage from './src/screens/HomePage';
const {width} = Dimensions.get('window');

function App() {
  return (
    <ScrollView style={style.parent}>
      <HomePage />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  parent:{
    
  }
});

export default App;
