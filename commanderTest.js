import { Command } from 'commander';

const program = new Command();

program
    //! requiredOption 메서드는 필수 입력 옵션을 만드는 메서드입니다
    .requiredOption('-n, --name <name>', 'file name')
    .option('-c, --compress', 'compress', false)
    .parse();

console.log(program.opts().n);
console.log(program.opts().name);
console.log(program.opts().compress);

//? 필수 입력 옵션을 입력하지 않으면 에러가 출력 된다.
//? error: required option '-n, --name <name>' not specified