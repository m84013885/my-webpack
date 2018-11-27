import './utills/resize'
import './style.css'
async function test(){
    console.log(1)
    await test1(3000)
}
function test1 (second){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' enough sleep~');
        }, second);
    })
}
test()
if(module.hot){
    module.hot.accept()
}