import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  logoContainer: {
    flex: 2,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  subtitle:{
    color: Colors.gray
  },
  button: {
    position: 'absolute',
    backgroundColor: Colors.black,
    borderRadius: 20,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
  }
});