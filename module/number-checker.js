module.exports = function(data){
  if(typeof(data)==="number"){
    return true;
  }else{
    console.error("숫자가 아닙니다.")
    return false
  }
}

