import {StyleSheet} from 'react-native';

import {ColourScheme} from '../../styles/colourScheme';
import {FontSize} from '../../styles/constants';

export const defaultStyles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    text: {
      fontFamily: 'AbhayaLibre-Medium',
      color: colourScheme.fontPrimary,
      fontSize: FontSize.Text,
    },
    // Headers
    header: {
      fontFamily: 'AbhayaLibre-SemiBold',
      color: colourScheme.fontPrimary,
    },
    header1: {
      fontSize: FontSize.Header1,
    },
    header2: {
      fontSize: FontSize.Header2,
    },
  });

export const bootstrap = StyleSheet.create({
  /** Flex */
  flex1: {flex: 1},
  flexRow: {flexDirection: 'row'},
  spaceAround: {justifyContent: 'space-around'},
  spaceBetween: {justifyContent: 'space-between'},
  alignCenter: {alignItems: 'center'},
  /** Width */
  width25: {width: '25%'},
  width50: {width: '50%'},
  width75: {width: '75%'},
  width100: {width: '100%'},
  /** Height */
  height25: {height: '25%'},
  height50: {height: '50%'},
  height75: {height: '75%'},
  height100: {height: '100%'},
  /** Margin */
  // Horizontal and vertical
  m1: {margin: 2},
  m2: {margin: 4},
  m3: {margin: 6},
  m4: {margin: 8},
  m5: {margin: 10},
  // Horizontal only
  mx1: {marginHorizontal: 2},
  mx2: {marginHorizontal: 4},
  mx3: {marginHorizontal: 6},
  mx4: {marginHorizontal: 8},
  mx5: {marginHorizontal: 10},
  // Vertical only
  my1: {marginVertical: 2},
  my2: {marginVertical: 4},
  my3: {marginVertical: 6},
  my4: {marginVertical: 8},
  my5: {marginVertical: 10},
  /** Padding */
  // Horizontal and vertical
  p1: {padding: 2},
  p2: {padding: 4},
  p3: {padding: 6},
  p4: {padding: 8},
  p5: {padding: 10},
  // Horizontal only
  px1: {paddingHorizontal: 2},
  px2: {paddingHorizontal: 4},
  px3: {paddingHorizontal: 6},
  px4: {paddingHorizontal: 8},
  px5: {paddingHorizontal: 10},
  // Vertical only
  py1: {paddingVertical: 2},
  py2: {paddingVertical: 4},
  py3: {paddingVertical: 6},
  py4: {paddingVertical: 8},
  py5: {paddingVertical: 10},
});
