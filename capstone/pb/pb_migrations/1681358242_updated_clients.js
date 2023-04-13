migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2e3pmqkg3dki10p")

  // remove
  collection.schema.removeField("ddihtxrz")

  // remove
  collection.schema.removeField("cfj5zgig")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1kghfinb",
    "name": "age",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2e3pmqkg3dki10p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ddihtxrz",
    "name": "dob",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

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

  // remove
  collection.schema.removeField("1kghfinb")

  return dao.saveCollection(collection)
})
