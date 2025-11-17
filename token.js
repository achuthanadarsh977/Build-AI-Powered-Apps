"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gpt_tokenizer_1 = require("gpt-tokenizer");
var tokens = (0, gpt_tokenizer_1.encode)("ChatGPT is awesome");
console.log("Encoded Tokens:" + tokens);
console.log("Length of tokens:" + tokens.length);
