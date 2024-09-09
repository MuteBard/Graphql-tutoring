"use strict";

const ENV = process.env;

exports.mongodb = {
	password: ENV['MONGO_DB_PASS']
};
