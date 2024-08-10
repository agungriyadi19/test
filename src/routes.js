const { deleteBookByIdHandler } = require("./handler");
const { editBookByIdHandler } = require("./handler");
const { getBookByIdHandler } = require("./handler");
const { addBookHandler, getBooksHandler } = require("./handler");

const routes = [
	{
		method: "POST",
		path: "/books",
		handler: addBookHandler
	},
	{
		method: "GET",
		path: "/books",
		handler: getBooksHandler
	},
	{
		method: "GET",
		path: "/books/{bookId}",
		handler: getBookByIdHandler
	},
	{
		method: "PUT",
		path: "/books/{bookId}",
		handler: editBookByIdHandler
	},
	{
		method: "DELETE",
		path: "/books/{bookId}",
		handler: deleteBookByIdHandler
	}
];

module.exports = routes;
