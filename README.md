# async module

## example
```
var AsyncCalculator = function() {
    this.count = async(function(resolve, reject, param) {
        setTimeout(function() {
            resolve(param ++);
        }, 1000);
    });
};
```

```
var object = new AsyncCalculator();
var value = yield object.count(1);
```