import {CountStream} from './ts';
import * as http from 'http';

const countstream = new CountStream('book');

http.get('http://www.manning.com',(res)=>{
    res.pipe(countstream);
});

countstream.on('total',(count:number)=>{
    console.log('total',count);
})