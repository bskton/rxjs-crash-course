import { Observable, Observer, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';

const observable = Observable.create((observer: Observer<any>) => {
  try {
    observer.next('Hey guys!');
    observer.next('How are you?');
    setInterval(() => {
      observer.next('I am good.');
    }, 2000);
  } catch (err) {
    observer.error(err);
  }
}).pipe(share());


const subscription: Subscription = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('Completed.')
);

setTimeout(() => {
  const anotherSubscription: Subscription = observable.subscribe(
    (x: any) => addItem('Subscription 2: ' + x)
  );
}, 5000);

function addItem(val: any): void {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}