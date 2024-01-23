/**
 * Método que elimina todo lo que no sean números de una cadena de texto
 * @param {string} value Cadena de texto a validar
 * @returns {String}
 */
export const onlyNumbers = (value: string): string => {
  return value.replace(/[^0-9]/gi, "");
};

/**
 * Método que elimina todo lo que no sean caracteres alfabéticos y caracteres con acentos de una cadena de texto
 * @param {string} value Cadena de texto a validar
 * @returns {String}
 */
export const onlyLettersAndAccents = (value: string): string => {
  return value.replace(/[^A-Za-zÀ-ÿñ.,;-\s]/gi, "");
};
