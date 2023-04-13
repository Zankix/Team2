migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy")

  // add
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
      "maxSelect": 1,
      "displayFields": [
        "firstname",
        "lastname",
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy")

  // remove
  collection.schema.removeField("qjjvfqtj")

  return dao.saveCollection(collection)
})
