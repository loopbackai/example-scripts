import { nothing } from "./lib.ts";
import { nothingX } from "./lib.ts";

const decoder = new TextDecoder();
console.log("Hi");
for await (const chunk of Deno.stdin.readable) {
  const text = decoder.decode(chunk);
  console.log(text.trim());
  nothingX()
}
