
import additional, {multiply} from './mathUtil.js'; // export로 쓰면 중괄호

console.log("[debug] >>> add", additional(4,5)); // {} 없이 쓴 add 함수는 이름 별칭으로 지정 가능
console.log("[debug] >>> multiply", multiply(4,5));