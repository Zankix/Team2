migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qjjvfqtj",
    "name": "clients",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2e3pmqkg3dki10p",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qjjvfqtj",
    "name": "clients",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2e3pmqkg3dki10p",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": [
        "firstname",
        "lastname",
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
