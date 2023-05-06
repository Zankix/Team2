migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy")

  // remove
  collection.schema.removeField("lvjzwhso")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lvjzwhso",
    "name": "workoutdescription",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
