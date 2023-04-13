migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d1tfftlwgnzbv4g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyqvtelj",
    "name": "dob",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 8,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d1tfftlwgnzbv4g")

  // remove
  collection.schema.removeField("eyqvtelj")

  return dao.saveCollection(collection)
})
