# Activar la sincronización con Firebase (una sola vez)

Todo se hace desde el navegador, sin instalar nada.

## 1. Proyecto
En console.firebase.google.com crea un proyecto (plan Spark, sin Google Analytics).
Si ya tienes el límite de proyectos, puedes usar uno existente: los datos de esta app
quedan separados, bajo el nombre "asturiano-a1".

## 2. Activar el acceso con correo
Compilación > Authentication > Comenzar > Método de acceso > "Correo electrónico/contraseña" > Activar.

## 3. Crear la base de datos
Compilación > Firestore Database > Crear base de datos > modo producción > elige región (europe-west).

## 4. Reglas de Firestore
Firestore > pestaña Reglas. Si es un proyecto nuevo, pega esto y pulsa Publicar:

    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /users/{uid}/apps/{appId} {
          allow read, write: if request.auth != null && request.auth.uid == uid;
        }
      }
    }

Si el proyecto ya tenía reglas, AÑADE solo el bloque "match /users/{uid}/apps/{appId} { ... }"
dentro de las que hay, sin borrar las demás.

## 5. Configuración de la app
Configuración del proyecto (rueda dentada) > Tus apps > icono web (</>) > ponle un nombre >
Registrar. Copia los valores de "firebaseConfig".
En GitHub abre firebase-config.js, pulsa el lápiz, pega cada valor en su sitio y guarda (Commit).

## 6. Usarla
Abre la app > pestaña Plan > "Crear cuenta nueva" con tu correo y una contraseña.
En otros móviles, "Entrar" con el mismo correo y contraseña.
