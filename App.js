import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { useEffect, useState, } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const FAKE = 'http://10.0.0.100:8081/contatos';
const FAKE_USUARIOS = 'http://10.0.0.100:8081/usuarios';




function LoginScreen({ navigation }) {
 
const [login, setLogin] = useState('');
const [senha, setSenha] = useState('');


//verfica se a senha e o login estai corretas
function validarLogin(){
  axios.get(FAKE_USUARIOS)
  .then(function(response){
    const usuarios = response.data;
    const usuarioValidado= usuarios.find(
      a => a.login === login && a.senha === senha
    );
    if (usuarioValidado){
      alert("Bem vindo ao sitema!");
      navigation.navigate('Contatos');
    }else{
      alert("Loginou senha incorretos");
    }
  })
  .catch(function(error){
    console.log(error);
  });
}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5dec5' }}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/6388/6388307.png'
        }}
      />


      <Text style={styles.texto} >


        Login
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite login'
        keyboardType='text'
        onChangeText={setLogin}
        value={login}
      />
      <Text style={styles.texto} >


        Senha
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite sua senha'
        secureTextEntry = {true}
        onChangeText={setSenha}
        value={senha}
      />
      <View style={{ width: 300, marginBottom: 20 }}>
        <Button
      title='login'
      onPress={validarLogin}
/>
         
      </View>
      <View style={{ width: 300 }}>
        <Button title='Cadastre-se' onPress={() => navigation.navigate('Cadastro')} />
      </View>
    </View>
  );
}
function CadastrarScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5dec5' }}>
      <Text style={styles.texto} >


        Nome
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite Nome'
        keyboardType='text'
        onChangeText={setNome}
        value={nome}
      />
      <Text style={styles.texto} >


        CPF
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite CPF'
        keyboardType='text'
        onChangeText={setCpf}
        value={cpf}
      />


      <Text style={styles.texto} >


        Email
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite seu Email'
        keyboardType='text'
        onChangeText={setEmail}
        value={email}
      />
      
      <Text style={styles.texto} >
        Login
        </Text>

        <TextInput style={styles.input}
        placeholder='Digite seu login'
        onChangeText={setLogin}
        value={login}
      />


      <Text style={styles.texto} >


        Senha
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite sua senha'
        secureTextEntry = {true}
        onChangeText={setSenha}
        value={senha}
      />
      <View style={{ width: 300, marginTop: 10 }} >
        <Button
          title="Cadastrar"
          color='#0063c0'
          onPress={() => {
            axios.post(FAKE_USUARIOS, {nome,email,login,senha})
            .then(() => {
              alert('cadastro realizado!');
              navigation.goBack();
            })
            .catch(err => {console.log(err)
            alert("erro ao cadastrar")
            })
          }}
        />
      </View>
    </View>
  );
}
function ContatoScreen({ navigation }) {
    const[contatos,setContatos] = useState([]);


    useEffect(()=>{
        carregar();
    },[]);


    function carregar(){
        axios.get(FAKE)
        .then(function(response){
            setContatos(response.data);
        })
        .catch(function(error){
            console.log(error);
        });


    }
  return (
    <ScrollView >
    {contatos.map((item) =>(
        <View key={item.id} style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/6388/6388307.png'
          }}
        />
        <TouchableOpacity onPress={()=> navigation.navigate('Contato Detalhado', item)}>
            <View style={{marginTop:20}}>
                <Text style={{fontWeight:'bold'}}>{item.nome}</Text>
                <Text style={{fontWeight:'bold'}}>Celular: {item.telefone}</Text>
            </View>
        </TouchableOpacity>
        </View>
    ))}
    </ScrollView>
  );
}
function cadascontScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');


    function cadastro(){
        axios.post(FAKE,{
            nome: nome,
            email: email,
            telefone: telefone,
        })
        .then(function(){
            navigation.goBack();
        })
        .catch(function (error){
            console.log(error);
        })
    }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5dec5' }}>
      <Text style={styles.texto} >


        Nome
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite Nome'
        onChangeText={setNome}
      />
      <Text style={styles.texto} >




        Email
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite seu Email'
        onChangeText={setEmail}
      />


      <Text style={styles.texto} >


        Telefone
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite seu telefone'
        keyboardType='numeric'
        onChangeText={setTelefone}
      />
      <Text style={styles.texto} >




        Senha
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite sua senha'
        onChangeText={setSenha}
      />
      <View style={{ width: 300, marginTop: 10 }} >
        <Button
          title="Cadastrar"
          color='#0063c0'
          onPress={cadastro}
        />
      </View>
    </View>
  );
}


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={LoginScreen}
          options={{
            title: 'login',
            headerTitleAlign: 'center',
          }} />


        <Stack.Screen name='Cadastro' component={CadastrarScreen}
          options={({navigation}) => ({
            title: 'Cadastrar usuário',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#4873ff'
            },
            headerRight: () => (
              <Button
                title='Voltar'
                onPress={() => navigation.goBack()}
              />
            ),
          })} />
        <Stack.Screen name='Contatos' component={ContatoScreen}
          options={({ navigation }) => ({
            title: 'Contatos',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#4873ff'
            },
            headerRight: () => (
              <Button
                title='  +  '
                onPress={() => navigation.navigate('Cadastro de contatos')}
              />
            ),
          })} />
        <Stack.Screen name='Cadastro de contatos' component={cadascontScreen}></Stack.Screen>
        <Stack.Screen name='Contato Detalhado' component={ContatoDetalhado}
          options={{
            title: 'ContatoDetalhado',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#4873ff'
            },
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function ContatoDetalhado({ route, navigation }) {
const { id } = route.params;


const [nome, setNome] = useState(route.params.nome);
const [email, setEmail] = useState(route.params.email);
const [telefone, setTelefone] = useState(route.params.telefone);


  function alterar() {
    axios.put(FAKE + '/' + id,{
        nome: nome,
        email: email,
        telefone: telefone
    })
    .then(function (response){
        console.log(response);
        navigation.goBack();
    })
    .catch(function (error){
        console.log(error);
    });
  }


  function deletar() {
    axios.delete(FAKE + '/' + id)


    .then(function (response){
        console.log(response);
        navigation.goBack();
    })
    .catch(function (error){
        console.log(error);
    });
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5dec5' }}>


      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
      />


      <View style={{ width: 300, marginTop: 10 }} >
        <Button
          title="Alterar"
          color='#0063c0'
          onPress={alterar}
        />
      </View>
      <View style={{ width: 300, marginTop: 10 }} >
        <Button
          title="Excluir"
          color='#ff0000'
          onPress={deletar}
        />
      </View>
    </View>
  )
}
export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e94343',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,


  },
  input: {
    height: 50,
    width: 300,
    borderColor: '#000000',
    backgroundColor: '#f5f5ee',
    marginBottom: 10,
  },
  texto: {
    marginRight: 250,
    margin: 0,
    marginTop: 20,
    fontSize: 20,
  },
});



