import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CloseButton from './CloseButton';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginHorizontal: 12,
    marginVertical: 11,
  },
  search: {
    marginLeft: 12,
    marginRight: 20,
  },
});
export const HeaderModal = (props) => {
  const {
    withFilter,
    withCloseButton,
    closeButtonImage,
    closeButtonStyle,
    closeButtonImageStyle,
    onClose,
    renderFilter,
  } = props;
  return React.createElement(
    View,
    {style: styles.container},
    <Image
      style={styles.search}
      source={require('./assets/images/searchicon.png')}
    />,
    withCloseButton && withFilter && renderFilter(props),
    React.createElement(CloseButton, {
      style: closeButtonStyle,
      imageStyle: closeButtonImageStyle,
      image: closeButtonImage,
      onPress: onClose,
    }),
  );
};
HeaderModal.defaultProps = {
  withCloseButton: true,
};
//# sourceMappingURL=HeaderModal.js.map
