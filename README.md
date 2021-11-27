# Proyecto GIFos - Permite la búsqueda de gifs por palabras claves.

Proyecto React JS. Desarrollado para la entrega del sprint N°3 curso Desarrollo Web Front End - Acamica.

## Decripción del Desarrollo del Proyecto

Para el desarrollo se consideraron los detalles siguientes:

### `Hook useState`

Se utilizó el hook useState para el manejo de estado de los filtros de la app.

### `Componentes`

Se crea dentro de carpeta "src" una subcarpeta llamada "components" para alojar los distintos componentes de la app.

- AutocompleteCategory.jsx: Componente que se encarga de mostrar sugerencias de autocompletado de palabra clave para búsqueda de gifs.  
- GifGridItem.jsx: Componente con la estructura necesaria para mostrar un gif y ofrecer la posibilidad de visitar acceder al gif en su página de origen. 
- GiphySearchBar.jsx: Componente que provee barra de búsqueda para escribir palabra clave para la obtención de gifs (incorpora el componente AutocompleteCategory.jsx).  
- GridResult.jsx: Componente que renderiza los resultados de la búsqueda de gifs.  
- Header.jsx: Componente que renderiza el logo de la página, y además el botón para alternar entre modo claro y oscuro.  
- NotFoundResult.jsx: Componente que se renderiza en caso de no encontrar resultados en la búsqueda de gifs.

### `Context`

Se utiliza React Context en el proyecto como alternativa a prop drilling, coin el objetivo de compartir entre componentes datos y estados, por ejemplo, indicar a cada componente de si el usuario alternó entre el modo claro y oscuro de la app. Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React.

### `Helpers`

Se crea dentro de carpeta "src" una subcarpeta llamada "Helpers", que contiene archivos javascript con funciones que utilizo para manejar datos en componentes, como es el caso de la obtención de sugerencias de autocompletado de palabra clave y la obtención de gifs directamente, ambos usan fetch para obtener la data. Además el helper getGifs.js integra una técnica de memorizado de estado, cuya implementación de esto último se encutra en la carpeta "Hooks".

### `Hooks`

Se crea dentro de carpeta "src" una subcarpeta llamada "Hooks", que contiene dos archivos. El primero llamado "customMemoization.js", es una implementación que permite memoriozar estados, y la desarrollé a modo de entrenamiento, ya que existe React.memo (higher order component) como herramienta de optimización ded performance. El segundo archivo llamado "useFetchGif.js" se utiliza para obtención de gif y este integra el helper "getGifs.js".

### `Imgs`

Se crea dentro de carpeta "src" una subcarpeta llamada "imgs", que contiene subcarpetas para alojar archivos svg y png que utiliza la app.

## CodeSanbox del Proyecto

Puedes revisar el código de esta app y modificarlo online [haciendo click aquí](https://codesandbox.io/s/gifos-app-7mn1s).

### Enlace del Proyecto

Puedes utilizar la app en el siguiente enlace: [click para ver GIFos en acción](https://7mn1s.csb.app/).