import inquirer from 'inquirer';
import fs       from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'fileName',
      message: '파일 명을 입력해 주세요.'
    },
    {
      type: 'input',
      name: 'title',
      message: '타이틀에 입력 될 텍스트를 입력해 주세요.'
    },
    {
      type: 'confirm',
      name: 'rootDiv',
      message: 'div#root을 사용하시겠습니까?'
    },
    {
      type: 'input',
      name: 'mainText',
      message: '본문에 입력 될 내용을 입력해 주세요.'
    }
  ])
  // .then(answers => console.log(answers))
  .then(answers => {

    // body에 script태그 안에 넣을 내용
    let script = ``;
    
    // title태그 추가
    script += `document.head.innerHTML += '<title>${answers.title}</title>';
        const mainText = document.createElement('p');
        mainText.innerText = '${answers.mainText}'`
    
    console.log(anwers.rootDIV);
    // root div를 만들 것인지
    if (answers.rootDIV === true) {
      script += `const root = document.createElement('div');
      root.id = 'root';
      document.body.appendChild(root);
      root.appendChild(mainText);`
    } else {
      script += `document.body.appendChild(mainText);`
    }

    // html의 내용 편집
    let makeHTML = `<!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
      <script>
        ${script}
      </script>
    </body>
    </html>`

    // html 만들기
    // fs.writeFile(`./result/${answers.fileName}.html`, makeHTML, (err, result)=>{
    //   if (err) throw err;
    //   console.log(result);
    // })
  })