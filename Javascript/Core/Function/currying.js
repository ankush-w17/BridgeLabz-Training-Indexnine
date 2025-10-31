function a(x){
    return function b(y){
        return function c(z){
            return x+y+z;
        }
    }
}

console.log(a(10)(20)(30));