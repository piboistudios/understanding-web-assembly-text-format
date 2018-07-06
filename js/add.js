let _module = 'add.wasm';


WebAssembly.instantiateStreaming(fetch(prefix + _module))
    .then(obj => {
        _testName = 'addition-test';
        console.log('WASM', obj);
        var sum = obj.instance.exports.add(1200, 2400);
        console.log(testName(), '1200 + 2400 =', sum);
    })
    .catch(err => {
        console.log(err);
    })