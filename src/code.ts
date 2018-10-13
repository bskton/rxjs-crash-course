import { fromEvent, Observable, Observer, Subscription } from 'rxjs';

const observable: Observable<any> = fromEvent(document, 'mousemove');

setTimeout(() => {
  const subscription: Subscription = observable.subscribe(
    (x: any) => addItem(x)
  );
}, 2000);

function addItem(val: any): void {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}