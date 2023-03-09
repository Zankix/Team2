migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2e3pmqkg3dki10p")

  // remove
  collection.schema.removeField("xqztia4y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cfj5zgig",
    "name": "sex",
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
  const collection = dao.findCollectionByNameOrId("2e3pmqkg3dki10p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xqztia4y",
    "name": "sex",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Male",
        "Female",
        "Other"
      ]
    }
  }))

  // remove
  collection.schema.removeField("cfj5zgig")

  return dao.saveCollection(collection)
})
