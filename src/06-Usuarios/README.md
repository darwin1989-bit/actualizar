# Usuarios
En este módulo vamos a realizar consultas de todos los usuarios que se tiene en la tienda. 

## Autorizador Devolución
El interfaz autorizador devolución podemos ampliar la fecha de devolución para las notas de crédito.

![Autorizador Devolucion](../public/images/usuarios/autorizadorDev.jpg)

### Ampliar la fecha de devolución

Para ampliar la fecha de devolución de las notas de crédito debemos escoger la empresa, la tienda y presionar buscar, esto nos va consultar dos roles, cualquiera de los dos roles, podemos ampliar la fecha de autorización.

![Autorizador Devolucion](../public/images/usuarios/Ampliar.jpg)

::: danger Importante
Para ampliar la fecha de devolución debemos tener la autorización de la Señora Susana N.
:::

Una vez ampliado la fecha de devolución, el botón va cambiar a color rojo y nos salir el siguiente:

![Autorizador Devolucion](../public/images/usuarios/autorizadorAmpliar.jpg)

::: tip Nota
Los días máximos para la autorización es de 1080 para los dos roles.
:::

### Disminuir la fecha de devolución

Una vez ampliado los días de devolución debemos regresar a los días que se tiene por defecto esto lo hacemos presionando el botón de color rojo y nos aparecerá el siguiente mensaje:

![Autorizador Devolucion](../public/images/usuarios/autorizadorDisminuir.jpg)

::: danger Importante
Una vez realizado la nota de crédito en la tienda se debe restablecer los días para no tener inconvenientes a futuro.
:::

## Usuarios Tienda

En este interfaz vamos a consultar todos los usuarios habilitados en la tienda que escojamos, adicional podemos habilitar y cambiar la contraseña.

![Usuarios Tienda](../public/images/usuarios/UsuariosTienda.jpg)

### Consultar de usuarios

Para realizar búsqueda de un usuario específico debemos escoger entre las dos opciones ***Buscar por usuario*** o ***Buscar por cédula***. 

Al buscar por usuario debemos escoger le empresa, la tienda e ingresar el usuario que vamos a consultar, el usuario puede ser un usuario de dominio o un usuario de ITE-POS.

![Usuarios Tienda](../public/images/usuarios/UsuarioTienda.jpg)

Tenemos el mismo proceso para buscar el usuario por el número de cédula.
![Usuarios Tienda](../public/images/usuarios/CedulaTienda.jpg)

::: danger Importante
Todos los campos son requeridos para realizar la búsqueda del usuario.
:::

::: danger Usuario no existe 
Si buscamos un usuario o una cédula que no existe nos aparecerá el siguiente mensaje:
![Usuarios Tienda](../public/images/usuarios/UsuarioNoexiste.jpg)
:::

Al escoger la opción ***Todos los usuarios*** nos va consultar todos los usuarios habilitados en la tienda que escojimos.
![Usuarios Tienda](../public/images/usuarios/TodosUsuarios.jpg)

::: tip Actualizar estado
Para habilitar o deshabilitar el estado de un usuario debemos colocarnos en el cuadro de matriz y dar clic en la información en el campo de estado y luego seleccionar una de las opciones.

![Estado Usuario](../public/images/usuarios/EstadoUsuario.jpg)

**Nota:**
El estado se actualiza tanto en matriz como en la tienda.
:::

::: tip Cambiar contraseña
Para cambiar la contraseña debemos colocarnos en el cuadro matriz y dar clic la información en el campo de de contraseña e ingresar una nueva contraseña.

![Contraseña Usuario](../public/images/usuarios/Contrasena.jpg)
:::danger Importante
Para el cambio de contraseña solo va estar habilitado para los usuario de ITE-POS, para cambio de contraseña de usuarios de dominio deben solicitar en Rettihelp.

:::


## Usuarios Logueados
Para este caso, tenemos la siguiente interfaz que nos ayuda con todos usuarios usuarios logueados tanto en las tiendas como en matriz.

![Usuario Logueado](../public/images/usuarios/UsuariosLogueados.jpg)

### Consultar usuarios logueados

Para consultar los usuarios logueados en tienda debemos seleccionar la empresa y la tienda que queremos realizar la consulta, esto nos arroja todos los cajero, administradores que se encuentra ingresados en el punto de venta.

![Usuario Logueado](../public/images/usuarios/UserLogon.jpg)

Para consultar usuarios que se encuentren ingresados en el punto de venta pero en **MATRIZ**, debemos seleccionar matriz en la opción de tiendas, esto nos mostrará todos los usuarios que este ingresados.

![Usuario Logueado](../public/images/usuarios/UserMatriz.jpg)

### Cerrar sesión de usuarios

Para cerrar la sesión de un usuario debemos dar clic en el botón azul en el campo **LOGOUT**, con esto nos cierra la sesión de ese usuario en la IP que este ingresado. 

![Usuario Logueado](../public/images/usuarios/CerrarSesion.jpg)

Cuando cerremos la sesión del usuario nos aparecerá el siguiente mensaje:

![Usuario Logueado](../public/images/usuarios/UserDesl.jpg)

::: danger Usuarios logueados no exsisten

Si no hay ningún usuario iniciado sesión en el punto de venta se tiene el siguiente mensaje:

![Usuario Logueado](../public/images/usuarios/UserNo.jpg)
:::
