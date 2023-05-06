migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lq6hg2nv",
    "name": "workoutdescription",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgwr6chufrowiiy")

  // remove
  collection.schema.removeField("lq6hg2nv")

  return dao.saveCollection(collection)
})
