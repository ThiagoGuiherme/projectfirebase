import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    height: 280,
    width: 350,
    alignSelf: 'center',
    margin: 30,
    transform: [
      {
        rotate: '5deg'
      }
    ]
  },
  input: {
    height: 50,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginRight: 30,
    marginBottom: 20,
    marginLeft: 30,
    paddingLeft: 16
  },
  button: {
    backgroundColor: '#DCDCDC',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  buttomTitle: {
    color: '#00FFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  footerView: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d'
  },
  footerLink: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16
  }
})
