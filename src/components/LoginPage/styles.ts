import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blueviolet',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  container: {
    backgroundColor: 'white',
    width: '90%',
    margin: 30,
    borderRadius: 30,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'purple',
    margin: 10
  },
  subTitle: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'red',
    margin: 10
  },
  titleLogin: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'purple',
    margin: 10
  }, 
  label: {
    width: '90%',
    fontSize: 20,
    alignSelf: 'center'
  }, 
  subContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 45,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    padding: 5
  },
  inputPass: {
    fontSize: 20,
    height: 45,
    width: '85%'
  },
  iconEye: {
    width: '15%',
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  input: {
    height: 45,
    fontSize: 20,
    width: '90%',
  },
  button: {
    backgroundColor: 'blueviolet',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 6,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  salvarSenha: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
    alignContent: 'stretch',
    alignSelf: 'auto'
  },

  lembrar: {
    marginRight: 10
  },

  logo: {
    width: 65,
    height: 55,
  }
});