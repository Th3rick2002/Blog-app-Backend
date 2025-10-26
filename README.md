# Blog API

## Stack

- **Framework:** NestJS
- **ORM:** TypeORM
- **Base de datos:** PostgreSQL
- **Entorno:** Docker

## Instalar proyecto

1. Clonar repositorio
2. Levantar la base de datos con Docker:
    ```bash
    docker-compose up -d
    ```
3. Instalar dependencias:
    ```bash
    npm install
    ```
4. Iniciar el servidor en modo desarrollo:
    ```bash
    npm run start:dev
    ```
5. API corriendo en http://localhost:3500/api/v1/

## Endpoints

### Categorías

| Acción                       | Metodo HTTP | URL           |
|------------------------------|-------------|---------------|
| Obtener todas las categorías | GET         | /category     |
| Obtener una categoria por id | GET         | /category/:id |
| Agregar una categoria        | POST        | /category     |
| Actualizar una categoria     | PATCH       | /category/:id |
| Eliminar una categoria       | DELETE      | /category/:id |

Estructura de datos
```json
{
  "id_category": 1,
  "title": "category",
  "created_at": "2025-10-19T10:44:31.461Z",
  "updated_at": "2025-10-19T10:44:31.461Z",
  "deleted_at": null
}
```

### Publicaciones

| Acción                          | Metodo HTTP | URL       |
|---------------------------------|-------------|-----------|
| Obtener todas las publicaciones | GET         | /post     |
| Obtener publicación por id      | GET         | /post/:id |
| Agregar una publicación         | POST        | /post     |
| Actualizar una publicación      | PATCH       | /post/:id |
| Eliminar una publicación        | DELETE      | /post/:id |

Estructura de datos
```json
{
     "id_post": 3,
     "title": "Publicación",
     "content": "Contenido de la publicación",
     "image_url": "url/image.jpg",
     "author": "Author",
     "createdAt": "2025-10-19T10:44:51.901Z",
     "updatedAt": "2025-10-19T10:44:51.901Z"
}
```


## Notas

- Todas las rutas están bajo el prefijo /api/v1.
- La documentación completa se generará con Swagger en futuras versiones.
- Respuestas de error siguen el formato estándar de NestJS (HTTP Status + JSON).

## Próximas mejoras

- Integrar Swagger para documentación interactiva
- Agregar autenticación con JWT
- Filtrado y paginación en endpoints de publicaciones
