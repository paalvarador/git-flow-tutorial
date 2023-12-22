### Tutorial de Git Flow y Git

## Clonar un Proyecto con Git

# Paso 1: Instalación de Git

Si aún no tienes Git instalado, puedes descargarlo desde Git - Download e instalarlo en tu sistema operativo

# Paso 2: Obtener la URL del Repositorio

Dirigete al repositorio que deseas clonar (por ejemplo, en Github, GitLab, Bitbucket) y copia la URL del repositorio. Por ejemplo

```
https://github.com/usuario/proyecto.git
```

# Paso 3: Clonar el Repositorio

Utiliza el comando `git clone` seguido de la URL del repositorio que copiaste:

```
git clone https://github.com/usuario/proyecto.git
```

Esto descargará el repositorio en tu sistema local

## Trabajar con Git Flow

# Paso 1: Instalación de Git Flow

Asegurate de tener Git Flow instalado. Puedes instalarlo siguiendo las instrucciones para tu sistema operativo en git-flow.

# Paso 2: Iniciar Git Flow en el Repositorio Clonado

En la terminal, navega al directorio del proyecto clonado y ejecuta el comando `git flow init`

```
git flow init
```

Sigue las instrucciones para configurar Git Flow en el repositorio. Por ejemplo

```
Which branch should be used for bringing forth production release?
    - trunk
Branch name for production release: [] -> trunk
Branch name for "next release" development: [development] (Press Enter)

How to name your supporting branch prefixes?
Feature branches? [feature/] (Press Enter)
Bugfix branches? [bugfix/] (Press Enter)
Release branches? [release/] (Press Enter)
Hotfix branches? [hotfix/] (Press Enter)
Support branches? [support/] (Press Enter)
Version tag prefix? [] (Press Enter)
Hooks and filters directory? [/Path/user/Documents/Directory-name/.git/hooks] (Press Enter)
```

# Paso 3: Trabajar en una nueva funcional o Feature o Bug fixes

Crea una nueva rama de funcionalidad o fixes utilizando Git Flow

```
git flow feature start nombre_de_la_feature
git flow bugfix start nombre_del_bug_fix
```
