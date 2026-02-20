import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable,Image } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<View style={styles.logo}>
<Image
style={{width: 410, height: 70}}
source={require('./assets/titulo.png')}
/>
</View>
<View style={styles.placar1}>
<Text style={styles.txt1}>Placar</Text>
</View>
<View style={styles.placar2}>
<Text style={styles.txt2} >0</Text>
<Text style={styles.txt2} >0</Text>
</View>
<View style={styles.img1}>
<Image
style={{width: 100, height: 70}}
source={require('./assets/caixa.png')}
/>

<Image
style={{width: 100, height: 70}}
source={require('./assets/vs.png')}
/>

<Image
style={{width: 100, height: 70}}
source={require('./assets/caixa.png')}
/>


</View>
<View style={styles.button1}>
<Pressable style={styles.fundobt} >
<Text>Nova Partida</Text>
</Pressable>
</View>
<View style={styles.img2}>
<Image
style={{width: 90, height: 70}}
source={require('./assets/pedra.png')}
/>

<Image
style={{width: 90, height: 70}}
source={require('./assets/papel.png')}
/>

<Image
style={{width: 90, height: 70}}
source={require('./assets/tesoura.png')}
/>
</View>

<StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1, //ocupa a tela toda//
backgroundColor: 'white',

},

logo:{

flex: 0.1657 ,
backgroundColor:'white',
justifyContent:'center',
alignItems:'center',


},

placar1:{
flex: 0.1657,
backgroundColor:'white',
justifyContent:'center',
alignItems:'center',
},


txt1:{
fontSize: 40,
},

placar2:{
flex: 0.1657,
backgroundColor:'white',
justifyContent:'space-around',
alignItems:'center',
flexDirection:'row', //aletera o padrao// inverte//
},

txt2:{
fontSize: 40,
},

img1:{
flex: 0.1657,
backgroundColor:'white',
justifyContent:'space-around',
alignItems:'center',
flexDirection:'row',

},

button1:{
flex: 0.1657,
backgroundColor:'white',
justifyContent:'center',
alignItems:'center',
},

fundobt:{
backgroundColor: 'grey',
borderWidth: 1,
borderRadius:3,
padding:10,

},

img2:{
flex: 0.1657,
backgroundColor:'white',
justifyContent:'space-around',
alignItems:'center',
flexDirection:'row'

},



});