"use strict"

require('dotenv').config({
    silent: true
})

const path = require('path')
const fs = require('fs')

const readRecursive = require('./read-recursive-files')
const findFile = require('find-in-files');

const targetDirectory = process.env.TARGET_DIRECTORY


readRecursive(`${targetDirectory}/src/v1`, (err, files) => {
      if(err) 
        


    //Files 
    files
    //  Formata a lista contendo o nome arquivo como require, para depois ser procurado
    const listFiles = files.map((it) => {
        const filename = it.substr(it.lastIndexOf('/') + 1).replace('.js','');
        return {
            file:filename,
            path: it
        }
    })

    // const chunkFiles = []
    // for (let i = 0; i < (listFiles % 10); i++) {
    //     chunkFiles.push(listFiles.slice(0,10))
    // }

    
    //Find em todos os arquivos que tenha require(file)
    for (let file of listFiles) {
        
        // console.log( targetDirectory)
        // //Find in project, if there any require with this name
        findFile.findSync(`require('${file.file}')`, targetDirectory, '.js$')
        .then((result) => {
            console.log(result)
        })
        .catch(err => {
            console.error('Nop')
        })

    }

    // console.log(listFiles)

  })
