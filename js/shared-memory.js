_module = 'shared-memory.wasm';
memory = new WebAssembly.Memory({initial: 1});
importObject = {
    js: {
        memory: memory
    },
    console:
    {
        log: function(offset, length)
        {
            let bytes = new Uint8Array(memory.buffer, offset, length);
            let string = new TextDecoder('utf8').decode(bytes);
            console.log('WASM','::',string);
        }
    }
}

WebAssembly.instantiateStreaming(fetch(prefix + _module), importObject)
    .then(obj => {
        _testName = 'shared-memory-test';
        console.log('WASM', obj);
        obj.instance.exports.greetWorld();
    })
    .catch(err => {
        console.log(err);
    })