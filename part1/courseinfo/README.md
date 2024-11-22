# 1.1: Información del Curso, paso 1

La aplicación en la que comenzaremos a trabajar en este ejercicio se continuara desarrollando en algunos de los siguientes ejercicios. En este y otros conjuntos de ejercicios futuros de este curso, es suficiente enviar solo el estado final de la aplicación. Si lo deseas, también puedes crear un commit para cada ejercicio de la serie, pero esto es completamente opcional.

Usa Vite para inicializar una nueva aplicación. Modifica main.jsx para que coincida con lo siguiente

```jsx
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)copy
y App.jsx para que coincida con lo siguiente

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <h1>{course}</h1>
            <p>
                {part1} {exercises1}
            </p>
            <p>
                {part2} {exercises2}
            </p>
            <p>
                {part3} {exercises3}
            </p>
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div>
    )
}

export default App
```

y elimina los archivos adicionales App.css, e index.css, también elimina el directorio assets.

Desafortunadamente, toda la aplicación está en el mismo componente. Refactoriza el código para que conste de tres componentes nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. Header se encarga de mostrar el nombre del curso, Content muestra las partes y su número de ejercicios y Total muestra el número total de ejercicios.

Define los nuevos componentes en el archivo App.jsx.

El cuerpo del componente App será aproximadamente como el siguiente:

```jsx
const App = () => {
    // const-definitions

    return (
        <div>
            <Header course={course} />
            <Content ... />
            <Total ... />
        </div>
    )
}
```

**ADVERTENCIA** No trates de programar todos los componentes de corrido, porque esto podría ciertamente romper toda la aplicación. Procede en pequeños pasos, primero haz por ejemplo: el componente Header y solo cuando confirmes que funciona, podrás continuar con el siguiente componente.

El progreso cuidadoso y en pequeños pasos puede parecer lento, pero en realidad es con diferencia la forma más rápida de progresar. El famoso desarrollador de software Robert "Uncle Bob" Martin ha declarado

_"La única manera de ir rápido, es hacerlo bien"_

es decir, según Martin, avanzar con cuidado y con pequeños pasos es incluso la única manera de ser rápido.

# 1.2: Información del Curso, paso 2

Refactoriza el componente Content para que no muestre ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte.

```jsx
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

Nuestra aplicación pasa información de una manera bastante primitiva en este momento, ya que se basa en variables individuales. Esta situación mejorará pronto en la parte 2, pero antes de eso, vamos a la parte 1b para aprender acerca de JavaScript.

# 1.3: Información del Curso, paso 3

Avancemos para usar objetos en nuestra aplicación. Modifica las definiciones de las variables del componente App de la siguiente manera y también refactoriza la aplicación para que siga funcionando:

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return <div>...</div>
}
```

# 1.4: Información del Curso paso 4

Coloca los objetos en un array. Modifica las definiciones de las variables de App de la siguiente forma y modifica las otras partes de la aplicación que sean necesarias para que continue funcionando:

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return <div>...</div>
}
```

**Nota:** en este punto puedes asumir que siempre hay tres elementos, por lo que no es necesario pasar por los arrays usando bucles. Volveremos al tema de la renderización de componentes basados en elementos dentro de arrays con una exploración más profunda en la siguiente parte del curso.

Sin embargo, no pases diferentes objetos como props separados del componente App a los componentes Content y Total. En su lugar, pásalos directamente como un array:

```jsx
const App = () => {
  // definiciones de const

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
```

# 1.5: Información del Curso paso 5

Llevemos los cambios un paso más allá. Cambia el curso y sus partes a un solo objeto JavaScript. Arregla todo lo que se rompa.

```jsx
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return <div>...</div>
}
```

# 2.1: Información del curso paso 6

Terminemos el código para renderizar el contenido del curso de los ejercicios 1.1 - 1.5. Puedes comenzar con el código de las respuestas modelo. Las respuestas modelo para la parte 1 se pueden encontrar yendo al sistema de envío, haciendo clic en my submissions en la parte superior, y en la fila correspondiente a la parte 1, bajo la columna solutions, haciendo clic en show. Para ver la solución al ejercicio de información del curso, haz clic en index.js bajo kurssitiedot ("kurssitiedot" significa "información del curso").

Ten en cuenta que si copias un proyecto de un lugar a otro, es posible que debas eliminar el directorio node_modules e instalar las dependencias nuevamente con el comando npm install antes de poder iniciar la aplicación.

En general, no se recomienda copiar todo el contenido de un proyecto y/o agregar el directorio node_modules al sistema de control de versiones.

Cambiemos el componente App de la siguiente manera:

```jsx
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
```

Define un componente responsable de formatear un solo curso llamado Course.

La estructura de componentes de la aplicación puede ser, por ejemplo, la siguiente:

```
App
  Course
    Header
    Content
      Part
      Part
      ...
```

Por lo tanto, el componente Course contiene los componentes definidos en la parte anterior, que son responsables de renderizar el nombre del curso y sus partes.

La página renderizada puede verse, por ejemplo, de la siguiente manera:

<image src="https://fullstackopen.com/static/6e12df59c1c9e28c39ebdbe1b41ccf97/5a190/8e.png" alt="Modificacion en componentes del ejercicio 1.1 y 1.5" width="500">

Aún no necesitas la suma de los ejercicios.

La aplicación debe funcionar independientemente del número de partes que tenga un curso, así que asegúrate de que la aplicación funcione si agregas o quitas partes de un curso.

¡Asegúrate de que la consola no muestre errores!

# 2.2: Información del curso paso 7

Muestra también la suma de los ejercicios del curso.
<image src="https://fullstackopen.com/static/2d8aa950189db6cf2eeb794181429ae9/5a190/9e.png" alt="Vista de la pagina con la suma de cursos" width="500">

# 2.3\*: Información del curso paso 8

Si aún no lo has hecho, calcula la suma de los ejercicios con el método de array reduce.

Consejo profesional: cuando tu código se ve así:

```jsx
const total = parts.reduce((s, p) => someMagicHere)
```

y no funciona, vale la pena usar console.log, que requiere que la función de flecha se escriba en su forma más larga:

```jsx
const total = parts.reduce((s, p) => {
  console.log('what is happening', s, p)
  return someMagicHere
})
```

¿No funciona? : Utiliza tu motor de búsqueda para buscar cómo se utiliza reduce en un Array de Objetos.

# 2.4: Información del curso paso 9

Ampliemos nuestra aplicación para permitir un número arbitrario de cursos:

```jsx
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <div>// ...</div>
}
```

La aplicación puede, por ejemplo, verse así:

<image src="https://fullstackopen.com/static/8c1ce3363ec056cd15c5edacbeec3370/5a190/10e.png" 
alt = "Resultado de la aplicación" width = "500"/>

# 2.5: Módulo separado paso 10

Declara el componente Course como un módulo separado, que se importa en el componente App. Puedes incluir todos los subcomponentes del curso en el mismo módulo.
