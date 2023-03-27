migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy")

  // remove
  collection.schema.removeField("8qclibxz")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8qclibxz",
    "name": "exercises",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1soua36vzcyn84y",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": [
        "exercisename"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
