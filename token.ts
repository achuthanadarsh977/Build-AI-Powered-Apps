

import {encode} from "gpt-tokenizer";
import { decode } from "node:punycode";

const tokens = encode("ChatGPT is awesome")

console.log("Encoded Tokens:"+tokens)
console.log("Length of tokens:"+tokens.length)