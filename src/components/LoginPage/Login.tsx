import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import img from '../../assets/logo.png';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [savePassword, setSavePassword] = useState(false);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>App DDM Unigoiás</Text>
          <Text style={styles.subTitle}>Prof. Sandro TC</Text>
          <Text style={styles.titleLogin}> Fazer Login</Text>
        </View>
        
        <Text style={styles.label}>Email</Text>
        <View style={styles.subContainer}>
          <TextInput style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.subContainer}>
          <TextInput style={styles.inputPass}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.iconEye} 
            onPress={() => setShowPassword(!showPassword)}
            >
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.salvarSenha}>
          <TouchableOpacity style={styles.lembrar} 
          onPress={() => setSavePassword(!savePassword)}
          >
            <Icon name={savePassword ? 'check-square-o' : 'square-o'} size={20} />
          </TouchableOpacity>
          <Text>Lembrar senha</Text>
        </View>
        
        <TouchableOpacity style={styles.button} 
        onPress={() => console.log(email, password)}
        >
          <Text style={styles.textButton} >Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

