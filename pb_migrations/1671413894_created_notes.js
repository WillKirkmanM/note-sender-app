migrate((db) => {
  const collection = new Collection({
    "id": "yrjxz9yv4ntyiv2",
    "created": "2022-12-19 01:38:14.503Z",
    "updated": "2022-12-19 01:38:14.503Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rybnsypv",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "r7hxuaph",
        "name": "body",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1024,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yrjxz9yv4ntyiv2");

  return dao.deleteCollection(collection);
})
