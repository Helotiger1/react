import  { type ReactNode } from 'react';
import { contenidoDO_1, contenidoDO_2, contenidoDO_3,contenidoDO_4, contenidoDO_5, contenidoDO_6, contenidoDO_7, contenidoDO_8 } from './configs';
interface ContenidoProps {
  id: string;
  titulo: string;
  descripcion: ReactNode; 
  videoUrl: string;
  imagenUrl: string;
}

export default function useContenido(name: string): ContenidoProps | undefined {
  let content: ContenidoProps | undefined;

  const numeroNucleo = name.replace("nucleo", "");


  const contenidoPorNucleo: Record<string, ContenidoProps> = {
    "1": contenidoDO_1,
    "2": contenidoDO_2,
    "3": contenidoDO_3,
    "4": contenidoDO_4,
    "5": contenidoDO_5,
    "6": contenidoDO_6,
    "7": contenidoDO_7,
    "8": contenidoDO_8,
  };


  content = contenidoPorNucleo[numeroNucleo];

  return content;
}