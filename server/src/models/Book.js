const Model = require("./Model")

class Book extends Model {
  static get tableName() {
    return "books"
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ['title', 'author', 'pageCount'],
      properties: {
        title: "string",
        author: "string",
        pageCount: ["integer", "string"],
        description: "string",
        fiction: "boolean"
      }
    }
  }
}

module.exports = Book