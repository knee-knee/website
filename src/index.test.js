import {expect} from 'chai';   //assertion library
import jsdom from 'jsdom';     //library to write tests from the DOM
import fs from 'fs';           //uses file system

describe('The demo test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!");
            done();
            window.close();
        });
    })
})

