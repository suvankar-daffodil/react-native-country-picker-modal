import React, {memo} from 'react';
import {Emoji} from './Emoji';
import {useContext} from './CountryContext';
import {useAsync} from 'react-async-hook';
import {
  Image,
  ImageBackground,
  StyleSheet,
  PixelRatio,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 30,
    height: 30,
    //backgroundColor: 'red',
    // borderRadius: 13,
    // borderColor: 'red',
    // borderWidth: 2,
    // resizeMode: 'stretch',
  },
  emojiFlag: {
    //alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'cover',
    //borderWidth: 1 / PixelRatio.get(),
    //height: 30,
    //width: 30,
    //flex: 1,
    borderRadius: 15,
    borderWidth: 1,
    //resizeMode: 'cover',
    // borderColor: 'red',
  },
  imageFlag: {
    //justifyContent: 'center',
    flex: 1,
    resizeMode: 'cover',
    //opacity: 0.8,
  },
});
const ImageFlag = memo(({countryCode, flagSize}) => {
  const {getImageFlagAsync} = useContext();
  const asyncResult = useAsync(getImageFlagAsync, [countryCode]);
  console.log(asyncResult.result);
  if (asyncResult.loading) {
    return React.createElement(ActivityIndicator, {size: 'small'});
  }
  // return React.createElement(Image, {
  //   style: [styles.imageFlag],
  //   source: {uri: asyncResult.result},
  // });
  // return React.createElement(
  //   View,
  //   {style: styles.emojiFlag},
  //   React.createElement(ImageBackground, {
  //     style: [styles.imageFlag],
  //     source: {uri: asyncResult.result},
  //     resizeMode: 'stretch',
  //   }),
  // );

  return React.createElement(ImageBackground, {
    style: [styles.imageFlag],
    source: {uri: asyncResult.result},
    resizeMode: {resizeMode: 'stretch'},
  });
});
const EmojiFlag = memo(({countryCode, flagSize}) => {
  const {getEmojiFlagAsync} = useContext();
  const asyncResult = useAsync(getEmojiFlagAsync, [countryCode]);
  //console.log(asyncResult);
  if (asyncResult.loading) {
    return React.createElement(ActivityIndicator, {size: 'small'});
  }
  return React.createElement(
    ImageBackground,
    {style: [styles.emojiFlag], allowFontScaling: false},
    React.createElement(Emoji, Object.assign({}, {name: asyncResult.result})),
  );
});
export const Flag = ({countryCode, withEmoji, withFlagButton, flagSize}) =>
  withFlagButton
    ? React.createElement(
        View,
        {style: styles.container},
        withEmoji
          ? React.createElement(
              EmojiFlag,
              Object.assign({}, {countryCode, flagSize}),
            )
          : React.createElement(
              ImageFlag,
              Object.assign({}, {countryCode, flagSize}),
            ),
      )
    : null;
Flag.defaultProps = {
  withEmoji: true,
  withFlagButton: true,
};
//# sourceMappingURL=Flag.js.map
