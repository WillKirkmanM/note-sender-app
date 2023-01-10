migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrjxz9yv4ntyiv2")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrjxz9yv4ntyiv2")

  collection.listRule = null

  return dao.saveCollection(collection)
})
