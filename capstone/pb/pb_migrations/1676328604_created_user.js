migrate((db) => {
  const collection = new Collection({
    "id": "d1tfftlwgnzbv4g",
    "created": "2023-02-13 22:50:04.835Z",
    "updated": "2023-02-13 22:50:04.835Z",
    "name": "user",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "knol9nkd",
        "name": "firstname",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 45,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hnnhd1dz",
        "name": "lastname",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 45,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("d1tfftlwgnzbv4g");

  return dao.deleteCollection(collection);
})
