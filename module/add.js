const numberChecker = require("./number-checker.js")

module.exports={           //얘는 부품, 부품으로 내보내다
  add : function add (first, second){
    if(numberChecker(first)===true){
      return first+second;
    }
  }
}

