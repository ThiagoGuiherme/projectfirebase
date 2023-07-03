// importando a biblioteca do Firebase
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

/**
 * criando o objeto que irá conter os parâmetros
 * de conexão com a aplicação Firebase
 */
const firebaseConfig = {
  apiKey: "AIzaSyA6bMcjE1KoEd77AAmxdwF66N6Q1Bkua00",
  authDomain: "fir-react-app-34139.firebaseapp.com",
  projectId: "fir-react-app-34139",
  appId: "1:622731814983:web:1a4adb618dceecbbcfa962"
};

// inicializando o Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// exportando o módulo
export { firebase }

