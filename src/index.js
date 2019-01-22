import './utills/resize'
import './style.css'
if(module.hot){
    module.hot.accept()
}
async function test(){
    console.log(5)
    let test = await test1(5000)
    console.log(test)
}
function test1 (second){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' enough sleep~');
        }, second);
    })
}
test()
