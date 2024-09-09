"use strict";

const ENV = process.env;

exports.mongodb = {
	username: ENV['MONGO_DB_USERNAME'],
	password: ENV['MONGO_DB_PASS'],
	database: ENV['MONGO_DB_DATABASE'],
	hostName: ENV['MONGO_DB_HOSTNAME'],
	options: ENV['MONGO_DB_OPTIONS']
};