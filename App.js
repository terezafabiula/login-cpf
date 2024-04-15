import { useState } from 'react'
import { TextInput, SafeAreaView, StyleSheet, Image, Pressable, Text} from 'react-native';
export default function App() {
  const [nameField, setnameField] = useState('')
  const [name, setname] = useState('')
  const handleSendname = () => {
    setname(nameField)
  }
  const handleClear = () => {
    setname('')
    setnameField('')
  }
  return (
    <SafeAreaView style={styles.container}>
      {name == '' &&
      <>
        <Image source={require('./assets/perfil.png')} style={styles.imagem}/>
        <TextInput 
              style={styles.texto}
              placeholder='CPF'
              placeholderTextColor='#999'
              value={nameField}
              onChangeText={text => setnameField(text)}
            />
        <Pressable style={styles.logar}>
          <Text style={styles.logartexto} onPress={handleSendname}>LOGAR</Text>
        </Pressable>
      </>
      }
      {name == '000.000.000-00'  &&
        <>
          <Image source={require('./assets/rosto.png')} style={styles.pessoa}/>
          <Text style={styles.logado}>Você está logado com CPF: {name}</Text>     
        {name != '' &&
          <>
            <Pressable style={styles.limpar} onPress={handleClear}>
              <Text style={styles.limpartexto}>CPF NÃO É {name}</Text>
            </Pressable>
          </>
        }
        </>
      }
      {name != '000.000.000-00' &&
      <>
      </>}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex' ,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem:{
    width: 100,
    height: 100,
    marginTop: 150
  },
   texto: {
    backgroundColor: '#eeeeee',
    padding: 5,
    margin: 20,
    border: 'solid',
    borderWidth: 8,
    width: 300
  },
  logar:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 25,
    backgroundColor: '#000000',
  },
  logartexto:{
    color: '#ffffff',
    textAlign: 'center',
  },

  pessoa:{
    width: 100,
    height: 100,
    marginTop: 150
  },
  limpar:{
    backgroundColor: '#000000',
    textAlign: 'center',
    marginTop: 20,
    height: 30,
    width: 180,
  },
  limpartexto:{
    color: '#ffffff',
    paddingTop: 5,
    paddingLeft: 7
  },
  logado:{
    marginTop: 10,
  }
});


