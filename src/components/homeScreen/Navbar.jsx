import React from 'react';
import {Alert, Text, View, Image, TouchableOpacity} from 'react-native';
import {menu, profile} from '../../../assets/images/homePage/images';
import {navbarStyle as style} from '../../utils/homePage/Styles';

const Navbar = () => {
  const Ref = () => {
    Alert.alert('Action Not Included In Requirments');
  };
  return (
    <View style={style.navbar}>
      <View style={style.navs}>
        <TouchableOpacity onPress={Ref}>
          <Image style={style.menu} source={menu} />
        </TouchableOpacity>
        <Text style={style.date}>June 03, 2020</Text>
      </View>
      <TouchableOpacity onPress={Ref}>
        <Image source={profile} style={style.profile} />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
