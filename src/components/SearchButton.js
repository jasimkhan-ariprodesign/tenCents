import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {b2, white} from '../config/colors';
import {_fonts, _ms, _s} from './utils/Responsive';
// rewritten
const SearchButton = ({
  navigation,
  navigationScreen,
  name,
  selectedTopMenu,
}) => {
  // console.log('testing =>', selectedTopMenu);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(navigationScreen, {
          selectedTopMenu: selectedTopMenu,
        })
      }
      style={styles.parent}>
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: b2,
    paddingVertical: _ms(9),
    // paddingHorizontal: _ms(60),
    width: _s(180),
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: _ms(20),
    zIndex: -1,
  },

  btnText: {
    color: white,
    fontFamily: _fonts.londonBetween,
    fontSize: _ms(16),
  },
});

// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';
// import {b2, white} from '../config/colors';
// // rewritten
// const SearchButton = ({navigation, navigationScreen}) => {
//   return (
//     <View style={styles.parent}>
//       <TouchableOpacity
//         style={styles.btnWrap}
//         onPress={() => navigation.navigate(navigationScreen, {})}>
//         <Text style={styles.btnText}>Search</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SearchButton;

// const styles = StyleSheet.create({
//   parent: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   btnWrap: {
//     backgroundColor: b2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 90,
//     borderRadius: 4,
//   },
//   btnText: {
//     color: white,
//     fontFamily: 'LondonBetween',
//     fontSize: 19,
//   },
// });
