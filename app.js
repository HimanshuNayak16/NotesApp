// import yargs from 'yargs';
// import { hideBin } from 'yargs/helpers';
// import { addNote } from './notes.mjs';

const yargs = require('yargs');
const notes = require('./notes');

// node --experimental-modules app.mjs

// const yarg = yargs(hideBin(process.argv));

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes!',
    handler() {
        notes.listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading the note!',
    handler(argv) {
        notes.readNote(argv.title);
    }
})

// Create reset command
yargs.command({
    command: 'reset',
    describe: 'Remove all the notes!',
    handler() {
        notes.eraseNotes();
    }
});

yargs.parse();


// Create add command

// Create 