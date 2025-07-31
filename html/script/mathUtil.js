const add = (x,y) => {
    return x + y;
}

export const multiply = (x,y) => {
    return x * y;
}   

export default add

// 만약에 export default로 쓰면 main에서 import할 때 중괄호 없이 import 가능
// const add = (x,y) => {
//  return x + y;}
// 
// export default add


// export vs export default 알기