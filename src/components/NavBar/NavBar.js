//Nav Bar
// import { FontAwesome5 } from '@expo/vector-icons'; 
import Icon from "react-native-vector-icons/FontAwesome";

import {  useSelector } from "react-redux";

import { FlatList,StyleSheet, Text, View, Button,} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const NavBar = ()=>{
  const navigation = useNavigation();
  const cart = useSelector((state) => state.productItem.cart);
  const lengthofcart =cart.length

    return(
  <View style = {styles.navbar}>
    <Text>Shopping Flair</Text>
    <View style ={{flexDirection:"row", backgroundColor:"#FFFFFF"}}>
    {/* Cart Button */}
    <Button title='cart' onPress={()=>navigation.navigate('Cart')}/>
    {/* <FontAwesome5 name="shopping-cart" size={24} color="black" /> */}
    <Icon name="shopping-cart" size={26} color="#000000" />


    <Text>{lengthofcart}</Text>

    </View>

  </View>
    )
}


//styles

const styles = StyleSheet.create({
    navbar: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10
    },
  });

export default NavBar