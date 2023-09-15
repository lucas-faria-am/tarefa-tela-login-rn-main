import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, TouchableOpacity, Text, Image} from 'react-native';


export default function Login() {

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
          />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.subContainer}>
          <TextInput style={styles.inputPass}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.iconEye} 
            >
            <Icon name={'eye'} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.salvarSenha}>
          <TouchableOpacity style={styles.lembrar} 
          >
            <Icon name={'square-o'} size={20} />
          </TouchableOpacity>
          <Text>Lembrar senha</Text>
        </View>
        <TouchableOpacity style={styles.button} 
        >
          <Text style={styles.textButton} >Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

