const spy = ""
function receivesAFunction( spy){
    return spy();
}
function fn(){
    return "function"
}
function returnsANamedFunction(){
    return function fn(){
        return "function"
    }
}

function returnsAnAnonymousFunction(){
    return function(){}
}