import { Observable, Observer } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const firstObservable = Observable.create(
  (observer: Observer<{ msg: string }>) => {
    observer.next({ msg: 'Hey guys!' });
    observer.next({ msg: 'How are you?' });
  }
)
  .pipe(
    pluck('msg'),
    map((val: string) => val.toUpperCase())
  )
  .subscribe((x: string) => addItem(x));

function addItem(val: any): void {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
