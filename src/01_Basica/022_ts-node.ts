let msg: string = "Hello Typescript";
console.log(msg);

/**
 * from the command line
 *      > npx ts-node src/022_ts-node.ts
 * 
 * or install the package locally
 *      > npm i ts-node
 * 
 * or put it in the package.json file under scrips
 *  
*       {
            "name": "basarattypescript",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "start": "ts-node src/index.ts"  <=======
            },
            "keywords": [],
            "author": "",
            "license": "ISC",
            "dependencies": {
                "@types/node": "^18.11.8",
                "typescript": "^4.8.4"
            }
        }
 * 
 *      then just run 'npm start' from the command line
 * 
 */
