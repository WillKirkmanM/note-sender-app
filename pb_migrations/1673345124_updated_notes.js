migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrjxz9yv4ntyiv2")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrjxz9yv4ntyiv2")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
