// const express = require("express")

const http = require("http");
http
	.createServer((request, response) => {
		response.end("hello sofian");
	})
	.listen(6753);