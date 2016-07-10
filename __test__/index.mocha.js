/**
 * Created by https://github.com/volkovpv on 07.2016.
 */

'use strict';

var chai            = require('chai'),
    spies           = require('chai-spies'),
    mocha           = require('mocha'),
    sinon           = require('sinon'),
    fs              = require('fs'),
    sinonChai       = require("sinon-chai"),
    gulpCopyVendor  = require('../index');

chai.use(spies);
chai.use(sinonChai);

var should          = chai.should(),
    expect          = chai.expect,
    assert          = chai.assert,
    describe        = mocha.describe,
    it              = mocha.it,
    afterEach       = mocha.afterEach,
    spy             = sinon.spy;

describe('test app', function () {
    
    it('read file with vendors', function () {
        var testFileArr;
        gulpCopyVendor({
            readFile: __dirname+'/data/sourcePathFiles.js',
            startPathVendor: '/data/src',
            rootPath: './__test__/',
            outPutPath: '/dist'
        });
        //testFileArr = gulpCopyVendor.test.testFileArr;
        //expect(testFileArr).to.eql(['__test__/data/src/some-style.css']);
    });


    describe('test error', function () {
        it('no arguments', function () {
            assert.throws(gulpCopyVendor, Error, "gulp-copy-vendor. No options or options.readFile");
        });

        it('arguments fs.readFile', function () {
            var readFileSpy = spy(fs, 'readFile');
            gulpCopyVendor({
                readFile: './__test__/data/sourcePathFiles.json'
            });

            expect(readFileSpy.callCount).to.equal(1);
            expect(readFileSpy).to.have.been.calledWith('./__test__/data/sourcePathFiles.json', 'utf-8');

            fs.readFile.restore();
        });

        it('readVendor error', function () {
            // var ssss = gulpCopyVendor({
            //     readFile: './__test__/data/sourcePathFiles.jso'
            // });

            // expect(function () {
            //     //gulpCopyVendor({readFile: 'ssss'})
            // }).to.throw('Read "./__test__/data/sourcePathFiles.jso" error');


            //expect(gulpCopyVendor).to.throw(Error).and.not.throw("gulp-copy-vendor. No options or options.readFile");

            //expect(gulpCopyVendor()).to.throw(Error, "gulp-copy-vendor. No options or options.readFile");
            //expect( console.log.calledOnce ).to.be.true;

            //assert.ifError(ssss);

            //testReadVendor(true);
            //assert.throws(gulpCopyVendor, Error, 'Read "./__test__/data/sourcePathFiles.jso" error');

            // expect(gulpCopyVendor({
            //     readFile: './__test__/data/sourcePathFiles.jso'
            // })).to.throw('Read "./__test__/data/sourcePathFiles.jso" error');
        });
    });




});