
# English 🇺🇸
# Table of contents

- [Client Area](#client-area)
  - [Installation](#installation)
  - [Run Locally](#run-locally)
  - [Environment Variables](#environment-variables)
  - [FAQ](#faq)
  - [Screenshots](#screenshots)
  - [License](#license)

-
![Logo](https://b2gov.com/wp-content/uploads/2020/11/Original-sin-fondo.png)

# Client Area

Requires B2Gov API (https://github.com/B2Gov/api_server)

Login process based on http://jasonwatmore.com/post/2018/07/14/vue-vuex-user-registration-and-login-tutorial-example and https://bezkoder.com/jwt-vue-vuex-authentication/

Deploy process based on https://medium.com/@brian.young.pro/how-to-deploy-vue-js-app-to-google-cloud-with-cloud-build-ad104bb1cf60
## Installation

Install NodeJS for Windows https://nodejs.org/es/download/
or for Linux https://nodejs.org/es/download/package-manager/
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory:

```bash
  cd my-project
```

Install all dependencies with npm::

```bash
  npm install
```
or
```bash
  npm i
```

Finally, run the project:

```bash
  npm start
```


## Environment Variables

To run the project, create a new file named .env and give the environment variables appropiate values for your environment:

`API_URL=`

`VUE_APP_I18N_LOCALE=`

`VUE_APP_I18N_FALLBACK_LOCALE=`

`VUE_APP_I18N_SUPPORTED_LOCALE=`

`TG_EVT=`

Use the template from the file env.md
## FAQ

#### What if i have problems installing the dependencies?

Instead of use npm install, use this:
```bash
npm ci
``` 


#### I have problems with node_modules when I use npm start

In this case, in package.json file copy this line and replace it:

```
"start": "SET NODE_OPTIONS=--openssl-legacy-provider && webpack-dev-server --open --env.ENVIRONMENT=development"
```


## Screenshots

After starting the project, you should be able to see this screen:

![App Screenshot](https://i.postimg.cc/nz0Q1Gry/Captura.png)


## License

Commercial


# Español 🇪🇸
# Tabla de contenidos
- [Area de Clientes](#area-de-clientes)
  - [Instalacion](#instalacion)
  - [Ejecucion local](#ejecucion-local)
  - [Variables de Entorno](#variables-de-entorno)
  - [Preguntas](#preguntas)
  - [Capturas](#capturas)
  - [Licencia](#licencia)
-
![Logo](https://b2gov.com/wp-content/uploads/2020/11/Original-sin-fondo.png)
# Area de Clientes

Requiere B2Gov API (https://github.com/B2Gov/api_server)

Proceso de login basado en http://jasonwatmore.com/post/2018/07/14/vue-vuex-user-registration-and-login-tutorial-example and https://bezkoder.com/jwt-vue-vuex-authentication/

Proceso de deploy basado en https://medium.com/@brian.young.pro/how-to-deploy-vue-js-app-to-google-cloud-with-cloud-build-ad104bb1cf60
## Instalacion

Instala NodeJS para Windows https://nodejs.org/es/download/
o para Linux https://nodejs.org/es/download/package-manager/
## Ejecucion local

Clone el proyecto:

```bash
  git clone https://link-to-project
```

Vaya al directorio del proyecto:

```bash
  cd my-project
```

Instale todas las dependencias con npm:

```bash
  npm install
```
o
```bash
  npm i
```

Finalmente, inicie el proyecto:

```bash
  npm start
```
## Variables de Entorno

Para iniciar el proyecto, cree un nuevo archivo llamado .env y defina las variables con valores apropiados para el entorno:

`API_URL=`

`VUE_APP_I18N_LOCALE=`

`VUE_APP_I18N_FALLBACK_LOCALE=`

`VUE_APP_I18N_SUPPORTED_LOCALE=`

`TG_EVT=`

Use el template en el archivo env.md
## Preguntas

#### Si tengo problemas instalando las dependencias, que puedo hacer?

En vez de usar npm install, use este comando:
```bash
npm ci
``` 


#### Tengo problemas con los node_modules cuando inicio el proyecto:

En este caso, en el archivo package.json copia esta linea y reemplacela:

```
"start": "SET NODE_OPTIONS=--openssl-legacy-provider && webpack-dev-server --open --env.ENVIRONMENT=development"
```
## Capturas

Luego de iniciar el proyecto, deberias ser capaz de ver la siguiente pantalla:

![App Screenshot](https://i.postimg.cc/nz0Q1Gry/Captura.png)

## Licencia

Commercial
