migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrjxz9yv4ntyiv2")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrjxz9yv4ntyiv2")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
