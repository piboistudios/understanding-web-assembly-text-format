let prefix = 'wasm/';
let _testName = 'global';
let testName = function()
{
    return _testName.toUpperCase();
}
let memory = table = _module = null;
console.log('Test initialized.')