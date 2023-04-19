import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {menu, profile} from '../../../assets/images/homePage/images';

const Navbar = () => {
  return (
    <View style={style.navbar}>
      <View style={style.navs}>
        <TouchableOpacity>
          <Image style={style.menu} source={menu} />
        </TouchableOpacity>
        <Text style={style.date}>June 03, 2020</Text>
      </View>
      <TouchableOpacity>
        <Image source={profile} style={style.profile} />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const style = StyleSheet.create({
  navbar: {
    marginTop: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 19,
  },
  menu: {
    width: 40,
    height: 40,
  },
  date: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 15,
    marginLeft: 20,
  },
  profile: {
    width: 48,
    height: 48,
    marginRight: 20,
  },
  cardsParent: {
    marginLeft: 20,
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
