(module
    (import "console" "log" (func $log (param i32) (param i32)))
    (import "js" "memory" (memory 1))
    (data (i32.const 0) "Hello world!")
    (func (export "greetWorld")
        (call $log (i32.const 0) (i32.const 12))
    )
)