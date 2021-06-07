import { forEach } from "lodash";

export const foo = 'hello world';

export function log(message){
    console.log(message);
}

forEach([1,2],(item) => {
    console.log(item)
})

console.log(includes([1,2,3],1))
import('jquery')
    .then($ => {
        console.log($)
    })
    