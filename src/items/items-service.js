const ItemsService = {

  addItem(db, item) {
    return db
      .insert(item)
      .into('items')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deleteItem(db, id) {
    return db('items')
      .where({ id })
      .delete();
  },
  getItems(db) {
    console.log('getting items, service');
    return db('items')
      .select('*');
  }
};

module.exports = ItemsService;