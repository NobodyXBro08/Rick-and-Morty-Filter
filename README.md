# Rick and Morty Filter - Prueba Técnica

Mi nombre es **Omar Bonilla Rojas**, desarrollador frontend de 23 años, nacido en la ciudad de Bogotá, Colombia.  
Esta es la presentación de mi prueba técnica, cuyo objetivo fue construir una aplicación web interactiva que consuma la API pública de Rick and Morty, permitiendo al usuario explorar personajes, ubicaciones y episodios de forma visual, dinámica y filtrable.

---

## ✨ Descripción General

La aplicación fue desarrollada usando **Next.js**, **React**, **Tailwind CSS** y conexión con la API de Rick and Morty.  
Además, decidí llevar la prueba un paso más allá clonando parte de la información de la API hacia una base de datos propia, con el fin de poder extender la funcionalidad de la app y manejar los datos con más libertad.

---

## 🧩 Proceso de Desarrollo

A continuación, detallo el paso a paso que seguí para construir la aplicación:

### 1. Estructura Inicial
Comencé planteando la estructura básica de la aplicación con Next.js y configuré el entorno de trabajo. Inicialmente me enfoqué en levantar la arquitectura del frontend y el sistema de rutas.

### 2. Interfaz Básica
Diseñé una primera versión sencilla de la interfaz, que permitiera mostrar personajes con sus datos esenciales: imagen, nombre, especie y estado.

### 3. Conexión a la API
Integré la API pública de Rick and Morty (`https://rickandmortyapi.com/api`) usando `fetch` y `axios` para consumir los datos de personajes, ubicaciones y episodios.  
Empecé a trabajar con paginación, filtros y renderizado dinámico.

### 4. Pruebas y validaciones
A medida que conectaba la API, realicé pruebas con diferentes parámetros para asegurarme de que la app respondiera correctamente a búsquedas, errores de red y combinaciones de filtros.

### 5. Mejora visual y diseño responsivo
Luego de validar la funcionalidad básica, me enfoqué en mejorar el diseño visual.  
Estilicé la aplicación usando Tailwind CSS, agregué un fondo animado con estética inspirada en la serie y optimicé la interfaz para dispositivos móviles y pantallas pequeñas.

### 6. Clonación de la API (extensión backend)
Con el objetivo de extender la app, cloné parte de los datos de la API original hacia una base de datos propia (MongoDB), a través de rutas personalizadas creadas en el backend.  
Esto me permitió trabajar con ubicaciones, orígenes y episodios personalizados, abriendo la posibilidad de añadir nuevos datos que no existen en la API pública.

### 7. Integración total y refinamiento
Finalmente integré todo el flujo: interfaz, filtros, renderizado condicional, mensajes dinámicos, manejo de errores y funcionalidades completas para que la experiencia sea intuitiva, fluida y escalable.

---

## 🛠️ Tecnologías Utilizadas

- **Next.js** (React Framework)
- **React** (Frontend Library)
- **Tailwind CSS** (Estilos rápidos y responsivos)
- **Axios / Fetch API** (Consumo de APIs)
- **MongoDB Atlas + Mongoose** (Clonación y manejo de datos personalizados)
- **GitHub** (Control de versiones y repositorio remoto)

---

## 📦 Instalación y Ejecución

```bash
git clone https://github.com/tu-usuario/rick-and-morty-filter.git
cd rick-and-morty-filter

npm install

npm run dev
