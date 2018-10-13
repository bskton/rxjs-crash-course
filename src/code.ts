import { Subject, Observable, Observer } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

const firstObservable = Observable.create((observer: Observer<number>) => {
  let i = 1;
  setInterval(() => {
    observer.next(i++);
  }, 1000);
});

const secondObservable = new Subject();
setTimeout(() => {
  secondObservable.next('hey');
}, 3000);

const thirdObservable = firstObservable.pipe(skipUntil(secondObservable));
thirdObservable.subscribe((x: number) => addItem(x.toString()));

function addItem(val: string): void {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
