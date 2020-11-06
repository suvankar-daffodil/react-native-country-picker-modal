import * as React from 'react';
import { SafeAreaView, StyleSheet, Platform, View } from 'react-native';
import { AnimatedModal } from './AnimatedModal';
import { Modal } from './Modal';
import { useTheme } from './CountryTheme';
import { CountryModalContext } from './CountryModalProvider';
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: '90%',
    width: '90%',
    // marginVertical: 20,
    // marginHorizontal: 16,
    // borderColor: 'rgb(255, 255, 255)',
    borderRadius: 8,
    // shadowColor: 'rgba(0, 0, 0, 0.3)',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.8,
    // shadowRadius: 4,
    // elevation: 5,
  },
});
export const CountryModal = ({
  children,
  withModal,
  disableNativeModal,
  ...props
}) => {
  const { backgroundColor } = useTheme();
  const { teleport } = React.useContext(CountryModalContext);
  const content = React.createElement(
    SafeAreaView,
    { style: [styles.container, { backgroundColor }] },
    children
  );
  React.useEffect(() => {
    if (disableNativeModal) {
      teleport(
        React.createElement(AnimatedModal, Object.assign({}, props), content)
      );
    }
  }, [disableNativeModal]);
  if (withModal) {
    if (Platform.OS === 'web') {
      return React.createElement(Modal, Object.assign({}, props), content);
    }
    if (disableNativeModal) {
      return null;
    }
    return React.createElement(
      Modal,
      Object.assign({}, props),
      React.createElement(
        View,
        {
          style: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        },
        content
      )
    );
  }
  return content;
};
CountryModal.defaultProps = {
  animationType: 'slide',
  animated: true,
  withModal: true,
  disableNativeModal: false,
  transparent: true,
};
//# sourceMappingURL=CountryModal.js.map
