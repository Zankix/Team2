migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2e3pmqkg3dki10p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5pxle3ep",
    "name": "email",
    "type": "text",
    "required": true,
    "unique": true,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5pxle3ep",
    "name": "email",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
