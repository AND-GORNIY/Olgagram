import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';

const ProfileToolbar = ({onProfileDataEdit}) => {
  return (
    <View style={styles.Toolbar}>
      <TouchableOpacity onPress={onProfileDataEdit}>
        <Image style={styles.Edit} source={require('../../../img/edit.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Toolbar: {
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  Edit: {
    width: 32,
    height: 32,
  },
});

export default ProfileToolbar;
