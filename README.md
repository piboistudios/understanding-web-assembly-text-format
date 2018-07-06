# Practice: Understanding WebAssembly text format

This repository contains the files I used to follow along with the [Understanding WebAssembly text format](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format) guide.

## In a nutshell

If you haven't read the guide already and know nothing about Web Assembly, Web Assembly essentially introduces a standard for an assembly-like text-format (.WAT files, or Web Assembly Text files) and a corresponding binary format (.WASM files, or simply Web Assembly files) that can be securely transferred and executed across the web.

> In the same fashion as physical assembly languages, the WebAssembly binary format has a text representation — the two have a 1:1 correspondence.

## Requirements/Setup

You need Node.js and that's about it. Navigate to the root directory of the project and run the server with:
```
node server <port>
```