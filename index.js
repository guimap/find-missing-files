"use strict"

require('dotenv').config({
    silent: true
})

const path = require('path')

const readRecursive = require('./read-recursive-files')

const targetDirectory = process.env.TARGET_DIRECTORY


readRecursive(`${targetDirectory}/src/v1`, (err, files) => {
      if(err) 
        console.log(err)


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

    //Find em todos os arquivos que tenha require(file)

    console.log(listFiles)

  })
