import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from 'firebase';

const RegistroDocumentoScreen = () => {
  const [nomeDocumento, setNomeDocumento] = useState('');
  const [conteudoDocumento, setConteudoDocumento] = useState('');

  const handleRegistro = () => {
    firebase
      .database()
      .ref('documentos')
      .push({
        nome: nomeDocumento,
        conteudo: conteudoDocumento,
      })
      .then(() => {
        console.log('Documento registrado com sucesso!');
        setNomeDocumento('');
        setConteudoDocumento('');
      })
      .catch((error) => {
        console.error('Erro ao registrar o documento:', error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Nome do documento"
        value={nomeDocumento}
        onChangeText={setNomeDocumento}
      />
      <TextInput
        placeholder="Conteúdo do documento"
        value={conteudoDocumento}
        onChangeText={setConteudoDocumento}
        multiline
      />
      <Button title="Registrar documento" onPress={handleRegistro} />
    </View>
  );
};

export default RegistroDocumentoScreen;
