import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  textColor?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

const BotonCalc = ({
  texto,
  color = '#2D2D2D',
  textColor = 'white',
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text style={{...styles.botonTexto, color: textColor}}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
