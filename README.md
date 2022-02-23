# classroom-x


Debe tener instalado docker-compose

## limpiar todo
```bash
$ docker-compose down
```
```bash
$ docker-compose stop
```
```bash
$ docker-compose rm -s -f
```
## Compilar
```bash
$ docker-compose build backend 
```
```bash
$ docker-compose build frontend 
```
## Levantar cada contenedor en el siguiente orden
```bash
$ docker-compose up database
```
```bash
$ docker-compose up migration
```
```bash
$ docker-compose up backend
```
```bash
$ docker-compose up frontend
```
## Probar backend

https://localhost:3000

## Probar front

https://localhost:4000

login: admin
password: admin


El administrador puede crear materias
Cualquier usuario se puede registrar como profesor o estudiante
Los profesores pueden seleccionar que materias pueden impartir
Los estudiantes pueden seleccionar que materia y profesor pueden tomar como clases a cursar.

:)