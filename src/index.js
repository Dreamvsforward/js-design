class Bar {
  doStuff() {
    console.log('货拉拉');
  }
}


// 正则替换
// 替换
var a = 'abc;def;hij;';
a = a.replace(/;/g,',');
console.log(a);

// 查找是否有
var str = 'k123h'
// 以k开头，以h结束
var reg = /^k\wh$/
reg.test(str)



var b = new Bar();
b.doStuff()

class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); 