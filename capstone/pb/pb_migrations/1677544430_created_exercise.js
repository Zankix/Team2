migrate((db) => {
  const collection = new Collection({
    "id": "1soua36vzcyn84y",
    "created": "2023-02-28 00:33:50.063Z",
    "updated": "2023-02-28 00:33:50.063Z",
    "name": "exercise",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dp2l8qsm",
        "name": "exercisename",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rg7ysnat",
        "name": "sets",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "kp2igtcn",
        "name": "reps",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "nbxkzdfg",
        "name": "notes",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
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
  const collection = dao.findCollectionByNameOrId("1soua36vzcyn84y");

  return dao.deleteCollection(collection);
})
