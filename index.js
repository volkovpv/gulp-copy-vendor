/**
 * Created by https://github.com/volkovpv on 07.2016.
 */

'use strict';

function gulpCopyVendor(options) {

    var gulp        = require('gulp'),
        fs          = require('fs'),
        _           = require('underscore'),
        optionsApp  = null;

    if(!options || !options.readFile){
        throw new Error('gulp-copy-vendor. No options or options.readFile');
    }

    optionsApp = {
        readFile: options.readFile,
        encoding: options.encoding || 'utf-8',
        startPathVendor: options.startPathVendor || 'vendor/',
        endPathVendor: options.end || '.js',
        rootPath: options.rootPath || '',
        outputPath: options.outputPath || 'vendor/'
    };

    fs.readFile(optionsApp.readFile, optionsApp.encoding, readVendor);

    function readVendor(err, data) {
        var i                   = 0,
            len                 = 0,
            linkFile            = "",
            linkOutDir          = "",
            fileName            = "",
            stringDir           = "",
            fullPathDir         = "",
            appFullPathDir      = "",
            fileArr             = [],
            arrDirFile          = [],
            fileArrOne          = [],
            fileArrTwo          = [],
            filterPath          = null,
            regFindDoubleQuotes = null,
            regFindSingleQuotes = null;

        if (err) throw new Error('gulp-copy-vendor. Read "' +optionsApp.readFile+ '" error' + err);

        filterPath = optionsApp.startPathVendor.replace(/(^\.\/)?(^\/)?/, '');

        regFindSingleQuotes = new RegExp(filterPath + "(.+?).(?=')","g");
        regFindDoubleQuotes = new RegExp(filterPath + "(.+?).(?=\")","g");

        fileArrOne = data.match(regFindSingleQuotes);
        fileArrTwo = data.match(regFindDoubleQuotes);

        fileArr = _.union(fileArrOne, fileArrTwo);

        if(!fileArr){
            console.log("======= no vendor =======");
            return;
        }
        
        fileArr.forEach(function (item, i, arr) {
            gulp.src(optionsApp.rootPath + item)
                    .pipe(gulp.dest(optionsApp.rootPath + options.outputPath));
        });
    }
}



module.exports = gulpCopyVendor;
