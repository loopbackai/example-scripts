const decoder = new TextDecoder();
console.log("Hi");
for await (const chunk of Deno.stdin.readable) {
  const text = decoder.decode(chunk);
  console.log(text.trim());
}
