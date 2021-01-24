import * as flux from 'flux'

const dispatcher = new flux.Dispatcher();


dispatcher.register((e) => {
     var p;

     switch (e.type) {
          case 'hello':
               p = document.createElement('p')
               p.textContent = e.payload;
               break
          case 'world':
               p = document.createElement('p')
               p.textContent = `${e.payload}`
               p.style.fontWeight = 'bold'
               document.body.appendChild(p)
               break
          default:
               break
     }
})

dispatcher.dispatch({
     type: 'world',
     payload: 'world  wtf'
})
console.log(dispatcher)