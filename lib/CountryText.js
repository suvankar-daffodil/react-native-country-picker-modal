import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from './CountryTheme';
export const CountryText = (props) => {
  const {fontFamily, fontSize} = useTheme();
  return React.createElement(
    Text,
    Object.assign({}, props, {
      style: [styles.txt, fontFamily, fontSize],
    }),
  );
};
const styles = StyleSheet.create({
  txt: {
    marginLeft: 21,
    color: 'rgb(76,76,76)',
    height: 17,
  },
});
//# sourceMappingURL=CountryText.js.map
