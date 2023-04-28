// const A = new Promise(resolve => {
//   const A = '첫 번째 프로미스';
//   resolve(A);
// })
//   .then(value => {
//     console.log(value);
//     return ['첫 번째 덴','콤마 친구'];
//   })
//   .then(value => {
//     console.log('두 번째 덴', value);
//   })
//   .then(value => {
//     console.log('세 번째 덴', value)
//   })
//   .then(value => {
//     console.log('네 번째 덴', '왜 값이 없어?', value);
//     return new Promise(resolve => {
//       resolve(['나는 덴 속에 프로미스야~', value]);
//     })
//   })
//   .then(value => {
//     console.log('다섯 번째 덴', value);
//   })

  // const B = new Promise(resolve => {
    // resolve('프로미스 시작~')
  // })
  // .then(value => {
    // console.log(value);
    // return new Promise(resolve => {
      // resolve(['첫 번째 프로미스랑 지금 이 문자열이랑 같이 보내고 싶어~', value]);
    // })
  // })
  // .then(value => {
    // console.log(value);
  // })

const C = new Promise(resolve => {
  resolve('나를 끝까지 전송해 줘~');
})
.then(value => {
  console.log('첫 번째 덴', value)
  const A = new Promise(resolve => {
    resolve(value, '나도 버리지 말아줘');
  })
  .then(value => {
    return value
  })
  console.log('덴속의 프로미스', A);
  return [value, A];
})
.then(value => {
  value[1].then(value => console.log('덴속의 덴',value))
  console.log('두 번째 덴', value);
})