# StorageImage-MVC

![image](https://user-images.githubusercontent.com/71468355/217278761-24436226-de5d-4bb6-9275-1cea82a8fa3a.png)

El proyecto usa Java 1.8, Maven y Springboot 2.7.8.

En escencia el proyecto consiste de un apartado en donde se pueden subir imagenes a través de la funcionalidad drag and drop,
o a través del sistema de buscar en el sistema de archivos.

## Estructura de carpetas del proyecto

* **Codigo Java**: consta del `pom.xml` y la carpeta `src`
* **Herramientas externas**: 
    * *base de datos postgree*: La base de datos empleado está en la nube. Se puede crear una en https://supabase.com/  
* **Documentacion**: La funcionalidad del programa es práctica y se puede aplicar en la sesión de pruebas.

---

## Despliegues

* [JDK y Maven]
* [EC2] (Suspendido temporalmente)

---

## Pruebas

![image](https://user-images.githubusercontent.com/71468355/217281443-2414460e-7787-4976-8d6a-104efa19019c.png)


Para usar la aplicación web debes ingresar una imagen a través de la funcionalidad
drag and drop (arrastrar y soltar), en el área señalada, o a través del boton "upload a file"
y buscando dentro de tus archivos la imagen indicada.

Cabe resaltar que la apliación solo soporta imagenes de hasta 10MB.

---

## Configuracion

En la ruta *src/main/resources/* se encuentran los archivos de properties de spring y la aplicacion que son la configuracion predeterminada, estas variables se pueden configurar fuera del archivo usando variables de ambiente o variables del server donde esta corriendo.

El orden de prioridad es de la siguiente manera: 
`ambiente > server > archivos .properties`


---

## Contacto

Si tienes dudas sobre este u otro proyecto, o quieres contactarme, puedes realizarlo por medio de
mi mail john.chamorroc@gmail.com o mi [perfil](https://www.linkedin.com/in/john-edisson-chamorro-coral-76ab74228/) de LinkedIn
