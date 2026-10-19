# Asturianu Básico A1

Curso de asturiano para principiantes: 8 lecciones, tarjetas, práctica y voz.
Las lecciones se abren una a una al sacar un 80 % en la práctica.

## Publicar (GitHub Pages)
Sube todos los archivos a un repositorio público y activa Settings > Pages > rama main, carpeta / (root).

## Sincronizar el progreso entre móviles (opcional)
1. Baja el archivo `firebase-config.js` de tu repositorio de inglés (Download raw file).
2. Súbelo a este repositorio sustituyendo el que hay (Add file > Upload files).
3. En la app: pestaña Plan > "Entrar" con el mismo correo y contraseña que en la de inglés.

Es el mismo proyecto de Firebase, así que no hace falta crear nada nuevo. Si sale
"Firebase no deja guardar", las reglas de Firestore de ese proyecto no cubren esta app:
deben permitir leer y escribir en `users/{uid}/apps/{cualquier app}` al propio usuario.
