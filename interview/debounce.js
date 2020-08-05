// debounce function delays the function until the last event/function is called 

function debounce(fn, delay) {
  let timer;
  let first = true; // make sure the first function always runs
  return function(...args) {
    if(first) {
        setTimeout(() => {
        fn(...args)
        first = true; // make sure if function has run, it resets first to true
      }, 0)
      first = false;
    } else {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn(...args)
          first = true;
        }, delay)
    }
  }
}

function sayHello(name) {
  console.log('hello', name);
}

let debouceSayHello = debounce(sayHello, 1000)

debouceSayHello('brandon')

setTimeout(() => {
  debouceSayHello('brandon')
  debouceSayHello('brandon1')
  debouceSayHello('brandon2')
  debouceSayHello('brandon3')
  debouceSayHello('brandon4')
}, 3000)
