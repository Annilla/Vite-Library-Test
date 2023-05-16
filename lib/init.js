import Comp from './comp.svelte';

export default class {
    // initialize plugin
    init() {
        const idName = 'annyLib'
        const body = document.querySelector('body');
        const el = document.createElement('div');
        el.id = idName;
        body.appendChild(el);
        new Comp({
            target: document.getElementById(idName),
        })
    }
}