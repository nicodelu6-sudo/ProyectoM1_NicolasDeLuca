# Uso de Inteligencia Artificial

Durante el desarrollo del proyecto utilicé inteligencia artificial como herramienta de apoyo para resolver dudas y comprender mejor algunas partes de la lógica de la aplicación.

---

## 1. Generación de colores aleatorios y conversión de HSL a HEX

### Prompt utilizado

> Estoy haciendo una aplicación que genera paletas de colores. Necesito que cada color sea aleatorio y que se pueda mostrar tanto en formato HSL como en HEX. No sé cómo se hace esa conversión ni qué funciones necesitaría. Me podés explicar paso a paso cómo resolver esa parte?

### ¿Para qué me sirvió?

Este prompt me permitió entender cómo generar un color aleatorio utilizando valores de tono, saturación y luminosidad en HSL.

También me ayudó a comprender que HSL y HEX no representan colores diferentes, sino que son dos formas distintas de representar el mismo color.

A partir de esta explicación pude entender la lógica necesaria para generar un color una sola vez y convertirlo a HEX cuando el usuario selecciona ese formato.

![](<./images/Captura de pantalla 2026-09-17 051935.png>)

![](<./images/Captura de pantalla 2026-09-17 051950.png>)

---

## 2. Generación de la cantidad de colores seleccionada por el usuario

### Prompt utilizado

> Tengo un selector donde el usuario puede elegir cuántos colores quiere en la paleta, por ejemplo 6, 8 o 9. ¿Cómo hago para que JavaScript lea esa cantidad y cree exactamente ese número de colores en la página?

### ¿Para qué me sirvió?

Este prompt me permitió entender cómo obtener desde JavaScript el valor seleccionado por el usuario.

También me ayudó a comprender que el valor obtenido desde el selector debía convertirse a un número y utilizarse como límite de un ciclo `for`.

De esta manera pude hacer que la aplicación genere exactamente la cantidad de colores elegida por el usuario.

![](<./images/Captura de pantalla 2026-09-17 052414.png>)

![](<./images/Captura de pantalla 2026-09-17 052423.png>)

---

## 3. Mejora de la visibilidad del código de los colores

### Prompt utilizado

> ¿Cómo puedo solucionar el problema de la opacidad de la tarjeta de código del color si quiero que se vea semitransparente?

### ¿Para qué me sirvió?

Este prompt me ayudó a solucionar un problema de visibilidad que aparecía cuando se generaban colores muy claros.

Inicialmente podía utilizar `opacity`, pero entendí que esa propiedad también hacía transparente el texto.

La solución fue utilizar un color de fondo con `rgba()` para hacer semitransparente solamente el fondo de la etiqueta donde aparece el código HSL o HEX.

De esta forma el color de la tarjeta sigue siendo visible por detrás, mientras que el código mantiene una buena legibilidad.

![](<./images/Captura de pantalla 2026-09-17 054300.png>)

![](<./images/Captura de pantalla 2026-09-17 054313.png>)

---

## Conclusión

El uso de inteligencia artificial me permitió resolver dudas específicas durante el desarrollo y, principalmente, comprender la lógica detrás de las soluciones utilizadas.

Las consultas estuvieron enfocadas en la generación y conversión de colores, la creación dinámica de la cantidad de colores seleccionada por el usuario y la mejora de la visibilidad de los códigos mostrados en las tarjetas.