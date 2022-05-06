import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerContainer: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
  },
  textContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  loginButton: {
    backgroundColor: Colors.black,
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'

  },
  loginText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: Colors.gray
  }
});