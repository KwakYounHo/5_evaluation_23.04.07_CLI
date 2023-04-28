import { Command } from 'commander';

const program = new Command();

program
    .option('-n, --name <name>', 'file name', 'example name')
    .option('-c, --compress', 'compress', false)
    .parse();

console.log(program.opts().n);
console.log(program.opts().name);
console.log(program.opts().compress);