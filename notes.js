// import chalk from 'chalk';
// import fs from 'fs';

const chalk = require('chalk');
const fs = require('fs');

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    }
    else {
        console.log(chalk.red.inverse('Duplicate note!'));
    }
    
}

const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync('./notes.json', 'utf8');
        const notes = JSON.parse(dataJSON);
        return notes;
    }
    catch(err) {
        return [];
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);

}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesNew = notes.filter((note) => note.title !== title);

    if (notes.length > notesNew.length) {
        saveNotes(notesNew);
        console.log(chalk.green.inverse('Note deleted'));
    }
    else {
        console.log(chalk.red.inverse('No matching title found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes...'));
    notes.forEach((note) => {
        console.log('Title: ', note.title);
        console.log('Body: ', note.body);
        console.log('---------------')
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);
    if (noteToRead) {
        console.log('Title: ' + noteToRead.title);
        console.log('Body: ' + noteToRead.body); 
    }
    else {
        console.log(chalk.red.inverse('No matching title found!'));
    }
}

const eraseNotes = () => {
    const notes = [];
    saveNotes(notes);
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
    eraseNotes: eraseNotes
}