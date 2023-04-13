migrate((db) => {
  const collection = new Collection({
    "id": "zgwr6chufrowiiy",
    "created": "2023-02-27 03:51:53.942Z",
    "updated": "2023-02-27 03:51:53.942Z",
    "name": "workouts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vhhjrcil",
        "name": "workoutname",
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
        "id": "3ktlvb39",
        "name": "workoutdescription",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fpz9b51y",
        "name": "workoutfocus",
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
        "id": "fpbwm6o2",
        "name": "workoutdate",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy");

  return dao.deleteCollection(collection);
})
