import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  formContainer: {
    flexDirection: 'row',
    height: 80,
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingLeft: 16,
    flex: 1,
    marginRight: 5
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: '#696969',
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  listContainer: {
    marginTop: 20,
    padding: 20
  },
  entityContainer: {
    marginTop: 16,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingBottom: 16
  },
  entityText: {
    fontSize: 20,
    color: '#333333'
  },
  footerView: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
    marginRight: 140
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d'
  },
  footerLink: {
    color: '#788eec',
    fontWeight: 'bold',
    fontSize: 16
  }
})
