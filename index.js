function receivesAFunction(callback){
  callback()
}

function returnsANamedFunction(){
  return function rachel(){
      return "name"
  }
}

function returnsAnAnonymousFunction(){
  return function(){
    return "anonymous"
  }
}
