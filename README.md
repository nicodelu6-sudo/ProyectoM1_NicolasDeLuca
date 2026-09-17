# Generador de Paletas

**Link de web:**

https://nicodelu6-sudo.github.io/ProyectoM1_NicolasDeLuca/

---

## 📖 Descripción

Generador de Paletas es una aplicación web que permite crear paletas de colores de manera rápida y sencilla.

El usuario puede elegir la cantidad de colores que quiere generar y obtener diferentes combinaciones aleatorias. Cada color puede visualizarse tanto en formato **HSL** como en formato **HEX**.

El objetivo del proyecto fue aplicar los conocimientos básicos de **HTML, CSS y JavaScript**, trabajando con manipulación del DOM, eventos y generación dinámica de elementos.

---

## Índice

- [Descripción](#-descripción)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Funcionalidades principales](#-funcionalidades-principales)
- [Decisiones técnicas](#-decisiones-técnicas)
- [Generación de colores en HSL](#generación-de-colores-en-hsl)
- [Conversión de HSL a HEX](#conversión-de-hsl-a-hex)
- [Uso de span para mejorar la visibilidad](#uso-de-span-para-mejorar-la-visibilidad)
- [Flujo de la aplicación](./documentacion/flujo-app.md)
- [Uso de IA](./documentacion/uso-ia.md)

---

## 🛠 Tecnologías utilizadas

Para desarrollar el proyecto utilicé:

- HTML
- CSS
- JavaScript
- Git
- GitHub

---

## ⚙️ Funcionalidades principales

La aplicación permite:

- Elegir la cantidad de colores que tendrá la paleta.
- Generar colores de manera aleatoria.
- Crear dinámicamente las tarjetas de colores.
- Mostrar cada color en formato HSL.
- Mostrar cada color en formato HEX.
- Generar una nueva paleta cuando el usuario lo desee.
- Mantener visible el código del color incluso sobre colores claros.

---

## 💡 Decisiones técnicas

Durante el desarrollo del proyecto tomé algunas decisiones para mantener el funcionamiento de la aplicación simple y el código fácil de entender.

### Generación de colores en HSL

Elegí generar los colores utilizando **HSL** porque permite trabajar de forma sencilla con tres valores:

- Hue (tono)
- Saturation (saturación)
- Lightness (luminosidad)

Modificando estos valores aleatoriamente se pueden generar una gran variedad de colores.

### Conversión de HSL a HEX

Los colores se generan primero en formato HSL y después se convierten a HEX.

De esta manera, el mismo color puede mostrarse en los dos formatos sin tener que generar colores diferentes para cada uno.

Esto permite que el usuario pueda cambiar entre HSL y HEX manteniendo exactamente el mismo color.

### Uso de `span` para mejorar la visibilidad

En JavaScript creé un elemento `span` para mostrar el código de cada color.

La idea fue separar el código del resto de la tarjeta para poder aplicarle estilos propios desde CSS.

Al `span` se le puede agregar un fondo semitransparente, lo que permite que el código siga siendo visible incluso cuando el color generado sea muy claro.

Elegí esta solución porque era una forma sencilla de resolver el problema de visibilidad y requería muy poco código adicional.

En lugar de agregar una lógica más compleja para calcular si el texto debía ser claro u oscuro dependiendo de cada color, el fondo semitransparente permite mantener la lectura del código de una forma simple.

---

## 🔄 Flujo de la aplicación

La explicación del funcionamiento y del recorrido de la aplicación se encuentra en:

[Ver flujo de la aplicación](./documentacion/flujo-app.md)

---

## 🤖 Uso de IA

Durante el desarrollo utilicé herramientas de Inteligencia Artificial como apoyo para resolver dudas, comprender partes del código y buscar soluciones simples a algunos problemas del proyecto.

La documentación de las consultas realizadas se encuentra en:

[Ver documentación de uso de IA](./documentacion/uso-ia.md)