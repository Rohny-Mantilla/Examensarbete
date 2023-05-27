import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colorsRes = await ImageColors.getColors(uri, {});

  let primary;
  let secondary;
  switch (colorsRes.platform) {
    case 'android':
      // android result properties
      primary = colorsRes.dominant;
      secondary = colorsRes.average;
      const vibrantColor = colorsRes.vibrant;
      break;

    case 'ios':
      // iOS result properties

      primary = colorsRes.primary;
      secondary = colorsRes.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }
  return [primary, secondary];
};
