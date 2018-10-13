import { AsyncSubject, Subscription } from 'rxjs';

const subject = new AsyncSubject();

const firstSubscription = subject.subscribe(
  data => addItem('Subscription 1: ' + data),
  err => addItem(err),
  () => addItem('Subscription 1 Completed.')
)

let i = 1;
const interval = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
  const secondSubscription = subject.subscribe(
    data => addItem('Subscription 2: ' + data)
  )
  subject.complete();
}, 500)

function addItem(val: any): void {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}