migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d1tfftlwgnzbv4g")

  // remove
  collection.schema.removeField("wtyrdwlz")

  // remove
  collection.schema.removeField("afqu3ydl")

  // remove
  collection.schema.removeField("eyqvtelj")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d1tfftlwgnzbv4g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wtyrdwlz",
    "name": "address",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afqu3ydl",
    "name": "phonenumber",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 11,
      "pattern": ""
    }
  }))

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
})
