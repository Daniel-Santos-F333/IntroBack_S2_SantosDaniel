# PROGRAMACIÓN ORIENTADA A OBJETOS EN JAVASCRIPT

Es un estilo de programación donde creamos y utilizamos estructuras de datos de una forma muy similar a la vida real, esto nos permite tener una notable mejora en cuanto a la planificación y/o preparación del código de los programas o aplicaciones a desarollar. 

Este enfoque nos permite darle un manejo a un obstaculo complejo a la hora de empezar a programar, crear las estructuras de datos. Con esto podremos evitar problemas como tener un código desordenado o dificil de entender, ya que buscaremos una forma de organizar nuestras variables, constantes y funciones en agrupaciones las cuales se denominan como "clases".

## Ejemplo

Como ejemplo podriamos pensar en el protagonista (héroe) de un juego. Tiene una serie de variables relacionadas con él (vidas, fuerza, energía, etc...), pero también tiene una serie de funciones relacionadas con él (hablar, disparar, curar, etc...). Todas ellas, las podríamos agrupar en una clase porque tienen relación con ese concepto de personaje:

``` 
Personaje
-------------------

- Vidas restantes (propiedad)      # Número de vidas que le quedan al personaje
- Fuerza (propiedad)               # Número que representa la fuerza del personaje
- Energía (propiedad)              # Número que representa la energía de la vida actual
- Velocidad (propiedad)            # Número que representa la velocidad actual del personaje
- Hablar (método)                  # Función que hará que el personaje diga algo
- Disparar (método)                # Función que hará que el personaje dispare con su arma
- Curar (método)                   # Función que hará que el personaje use un botiquín
```
## Aplicado en JS

Para aplicarlo emplearemos la palabra clave ```clases```, dentro de ellas podremos definir clases con propiedades y métodos. Estas clases se instancian mediante la palabra clave ```new```.
