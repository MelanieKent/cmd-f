import { StyleSheet, SafeAreaView, Image, TouchableWithoutFeedback} from 'react-native';

export default function CalendarScreen( {navigation} ) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate("Pie")}}>
          <Image
          style={styles.calendar}
          source={require('../assets/calendar.png')}
          />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendar: {
    height: 534,
    width: 338,
    bottom: 30,
  }
});