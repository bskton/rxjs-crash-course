import { Subject } from 'rxjs';

const subject = new Subject();

const firstSubscription = subject.subscribe(
  data => addItem('Subscription 1: ' + data),
  err => addItem(err),
  () => addItem('Subscription 1 Completed.')
)

subject.next('The first thing has been sent.');

const secondSubscription = subject.subscribe(
  data => addItem('Subscription 2: ' + data)
)

subject.next('The second thing has been sent.')
subject.next('The third thing has been sent.');

secondSubscription.unsubscribe();

subject.next('A final thing has been sent.');

function addItem(val: any): void {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}