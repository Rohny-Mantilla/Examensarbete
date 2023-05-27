import {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}
interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}

export const GradienContext = createContext({} as ContextProps);

export const GradienProvadier = ({children}: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setColors(colors);
  };
  const setPrevMainColors = (colors: ImageColors) => {
    setColors(colors);
  };

  return (
    <GradienContext.Provider
      value={{
        colors,
        prevColors,
        setMainColors,
        setPrevMainColors,
      }}>
      {children}
    </GradienContext.Provider>
  );
};
