import * as fs from 'fs';
import * as domain from 'domain';

const fsDomain = domain.create();

fsDomain.on('error',(err) => console.log('domain err : ',err));

fsDomain.run(()=>{
    fs.open('any.txt','r',(err,data)=>{
        if(err) throw err;
    });
});

// domain err :  [Error: ENOENT: no such file or directory, open 'any.txt'] {
//     errno: -2,
//     code: 'ENOENT',
//     syscall: 'open',
//     path: 'any.txt',
//     domainThrown: true
//   }