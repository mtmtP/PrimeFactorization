'use strict';

/**
 * 要件
 * 
 *  目的：入力した数を素因数分解する。
 * 
 *  入力された数値を取得する。
 *  入力された数値が、素数かどうか判定する。
 *      約数配列を作っていく？（2から順に、入力値の平方根まで）
 * 　配列の0番で割ってみる。を、あまりが出るまで繰り返す。
 *    あまりが出る結果になりそうだったら、次の配列で割ってみる。
 *  商が1になるまで繰り返す。
 *   
 * 
 */


const inputArea = document.getElementById('input');
const resultArea = document.getElementById('result');
//約数配列を作る（返り値は配列）
function yakusu(num){
    let arr = [];
    for(let i = 2 ; i <= num/2 ; i++){
       if(num % i === 0 ){
           arr.push(i);
       }
    }
    console.log(`約数配列：${arr}`)
    return arr;
}

function hyouki(arr) {
    let soinsu = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            //console.log('同じでした')
            let count = 0;
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    count++;
                }
            }
            let insu;
            if(count > 1){
                insu = `${arr[i]}^${count}`;
            }else{
                insu = `${arr[i]}`;
            }
            soinsu.push(insu);
        }

    }
    return soinsu;
}

function bunkai(){
    if(inputArea.value===""){
        return;
    }
    let inputNumber = inputArea.value;
    let arr = yakusu(inputNumber);
    let arrInsu = [];
    let x = inputNumber;
    for(let i = 0 ; i < arr.length ; i ++ ){
        while( x % arr[i]===0){      
            x = x / arr[i]
            arrInsu.push(arr[i]);
        }
    }
    console.log(arrInsu);
    let result = hyouki(arrInsu);

    resultArea.innerHTML = result;
}