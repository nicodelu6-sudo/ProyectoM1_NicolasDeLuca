# Flujo de la aplicación

Este documento muestra de forma simple cómo funciona la aplicación para generar paletas de colores.

---

## 1. Pantalla inicial

Al abrir la aplicación, el usuario ve el título principal, una breve descripción y la sección de configuración de la paleta.

En esta parte todavía no se generaron colores. El usuario puede elegir cuántos colores quiere mostrar en la paleta.

Captura de pantalla 2026-09-17 085822.png

---

## 2. Selección de la cantidad de colores

El usuario puede desplegar el selector de cantidad y elegir cuántos colores quiere generar.

Las opciones disponibles en la aplicación son 6, 8 o 9 colores.

Captura de pantalla 2026-09-17 085836.png

---

## 3. Selección del formato de color

Después, el usuario puede elegir en qué formato quiere visualizar los códigos de color.

La aplicación permite mostrar los colores en formato `HEX` o `HSL`.

Captura de pantalla 2026-09-17 085848.png

---

## 4. Generación de la paleta

Una vez elegida la cantidad de colores y el formato, el usuario presiona el botón **"Generar paleta"**.

JavaScript toma la configuración seleccionada, genera los colores aleatorios y crea las tarjetas en pantalla.

Cada tarjeta muestra:
- el color generado como fondo
- el código correspondiente en el formato elegido

Captura de pantalla 2026-09-17 085857.png

---

## Resumen del flujo

El funcionamiento general de la app sigue estos pasos:

1. El usuario abre la aplicación.
2. Selecciona la cantidad de colores.
3. Selecciona el formato de color (`HEX` o `HSL`).
4. Presiona el botón **"Generar paleta"**.
5. JavaScript genera los colores aleatorios.
6. Se crean las tarjetas con sus respectivos códigos.
7. La paleta se muestra en pantalla.

---