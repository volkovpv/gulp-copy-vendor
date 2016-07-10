# gulp-copy-vendor  

Reads a path of dependencies from a file and copies them  

## install  

```npm i -D gulp-copy-vendor```  

## Usage  
``` 
var gulpCopyVendor = require(gulp-copy-vendor);
gulpCopyVendor(options);
```

### options:
- readFile - the path of the file where there are dependencies that you want to copy  
- encoding - encoding file (default utf-8)  
- startPathVendor - start path vendor
- rootPath - root path
- outPutPath - output path
- srcPath - src path

## example
```
myApp
  ├── src  
    ├── config.json  
    └── bower_components  
  ├── dist  
    ├── some file  
    └── vendor  
  └── gulpfile.js  
```

```
config.json

{
  "fileOne": "bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css",
  "fileTwo": "bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js"
}
```

```
optionsApp({
    readFile: './src/config.json'
    startPathVendor: 'bower_components/'
    outputPath: 'vendor/'
    srcPath: 'src/'
})
```

```
output file:

myApp
  ├── src  
    ├── config.json  
    └── bower_components  
  ├── dist  
    ├── some file  
    └── vendor  
        └──  bootstrap-datepicker
            └── dist
               ├── css  
                    └── bootstrap-datepicker3.min.css
               └── js  
                    └── bootstrap-datepicker.js
  └── gulpfile.js  
```