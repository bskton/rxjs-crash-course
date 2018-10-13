import { Observable, Observer } from 'rxjs';
import { merge } from 'rxjs';

const firstObservable = Observable.create((observer: Observer<string>) => {
  observer.next('Hey guys!');
})

const secondObservable = Observable.create((observer: Observer<string>) => {
  observer.next('How is it going?');
});

const mergedObserable = merge(firstObservable, secondObservable);
mergedObserable.subscribe((x: string) => addItem(x));

function addItem(val: any): void {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}