import { ScrollView, Text } from 'react-native'
import Navbar from '../components/tasksPage/Navbar'
import Calender from '../components/tasksPage/Calender'

 const TasksPage = () => {
  return (
    <ScrollView  style={{backgroundColor:'rgba(253, 253, 253, 1)'}}>
      <Navbar />
      <Calender />
    </ScrollView>
  )
}

export default TasksPage