let modules = [
    'shared0.wasm',
    'shared1.wasm'
]


memory = new WebAssembly.Memory({initial:1});
table = new WebAssembly.Table({initial: 1, element: "anyfunc"});

importObject = {
    js: {
        memory: memory,
        table: table
    }
}

Promise.all(
    [
        WebAssembly.instantiateStreaming(fetch(prefix + modules[0]), importObject),
        WebAssembly.instantiateStreaming(fetch(prefix + modules[1]), importObject)
    ])
    .then(results => {
        _testName = 'shared-modules-test (dynamic linkage)';
        console.log(testName(),results[1].instance.exports.doIt()); // should print 42
    })