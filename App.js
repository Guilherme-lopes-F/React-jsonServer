import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-web';



function LoginScreen({ navigation }) {
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
      />
      <Text style={styles.texto} >

        Senha
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite sua senha'
        keyboardType='numeric'
        secureTextEntry
      />
      <View style={{ width: 300, marginBottom: 20 }}>
        <Button title='login' onPress={() => navigation.navigate('Contatos')} />
      </View>
      <View style={{ width: 300 }}>
        <Button title='Cadastre-se' onPress={() => navigation.navigate('Cadastro')} />
      </View>
    </View>
  );
}
function CadastrarScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5dec5' }}>
      <Text style={styles.texto} >

        Nome
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite Nome'
        keyboardType='text'
      />
      <Text style={styles.texto} >

        CPF
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite CPF'
        keyboardType='text'
      />

      <Text style={styles.texto} >

        Email
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite seu Email'
        keyboardType='text'
      />

      <Text style={styles.texto} >

        Senha
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite sua senha'
        keyboardType='numeric'
        secureTextEntry
      />
      <View style={{ width: 300, marginTop: 10 }} >
        <Button
          title="Cadastrar"
          color='#0063c0'
          onPress={() => alert('cadastro feito')}
        />
      </View>
    </View>
  );
}
function ContatoScreen({ navigation }) {
  return (
    <ScrollView >
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/6388/6388307.png'
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Contato Detalhado', {
            nome: 'João Guilherme',
            email: 'joao@gmail.com',
            telefone: '(81)988888888',

          })}>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}> João Guilherme</Text>
            <Text style={{ fontWeight: 'bold' }}> Celular: (81)988888888</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/6388/6388307.png'
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Contato Detalhado', {
            nome: 'Pedro Henrique',
            email: 'pedro@gmail.com',
            telefone: '(81)977777777',

          })}>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}> Pedro Henrique</Text>
            <Text style={{ fontWeight: 'bold' }}> Celular: (81)977777777</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }} >
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/6388/6388307.png'
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Contato Detalhado', {
            nome: 'Artur Tomé',
            email: 'tome@gmail.com',
            telefone: '(81)966666666',

          })}>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold' }}> Artur Tomé</Text>
            <Text style={{ fontWeight: 'bold' }}> Celular: (81)966666666</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
function cadascontScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5dec5' }}>
      <Text style={styles.texto} >

        Nome
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite Nome'
        keyboardType='text'
      />
      <Text style={styles.texto} >


        Email
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite seu Email'
        keyboardType='text'
      />

      <Text style={styles.texto} >

        Telefone
      </Text>
      <TextInput style={styles.input}
        placeholder='Digite seu telefone'
        keyboardType='numeric'
        secureTextEntry
      />
      <View style={{ width: 300, marginTop: 10 }} >
        <Button
          title="Cadastrar"
          color='#0063c0'
          onPress={() => alert('cadastro feito')}
        />
      </View>
    </View>
  );
}

const stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='login' component={LoginScreen}
          options={{
            title: 'login',
            headerTitleAlign: 'center',
          }} />

        <stack.Screen name='Cadastro' component={CadastrarScreen}
          options={{
            title: 'Contatos',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#4873ff'
            },
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('login')}
              />
            ),
          }} />
        <stack.Screen name='Contatos' component={ContatoScreen}
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
        <stack.Screen name='Cadastro de contatos' component={cadascontScreen}></stack.Screen>
        <stack.Screen name='Contato Detalhado' component={ContatoDetalhado}
          options={{
            title: 'ContatoDetalhado',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#4873ff'
            },
          }}
        ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
function ContatoDetalhado({ route }) {
  const { nome, email, telefone } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5dec5' }}>

      <TextInput
        style={styles.input}
        value={nome}
        editable={false}
      />
      <TextInput
        style={styles.input}
        value={email}
        editable={false}
      />
      <TextInput
        style={styles.input}
        value={telefone}
        editable={false}
      />

      <View style={{ width: 300, marginTop: 10 }} >
        <Button
          title="Alterar"
          color='#0063c0'
          onPress={() => alert('Alteração feita')}
        />
      </View>
      <View style={{ width: 300, marginTop: 10 }} >
        <Button
          title="Excluir"
          color='#ff0000'
          onPress={() => alert('Exclusão feita')}
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