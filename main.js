// // const conteyner = document.querySelector('.cointeyner');
// // console.log(conteyner.innerHTML); // teg
// // console.log(conteyner.textContent); // text
// // console.log(conteyner.innerText);// tashalgan jaoylani olib tashlaydi

// // const item0 = document.querySelector('.item0');
// // console.log(item0.innerText);

// // const item1 = document.querySelector('.item1');
// // console.log(item1.innerText);

// // const item2 = document.querySelector('.item2');
// // console.log(item2.innerText);

// // const item3 = document.querySelector('.item3');
// // console.log(item3.innerText);

// function salom(matin){
//     console.log(`Assalomu aleykum ${matin}`);
// }
// salom("Fayzulloh")

// function language(go = "good afternun"){
//     console.log(go);
// }
// language()
// language("hi")
// language("hallo")
// language("Assalomu aleykum")

// function hallo(a = "Kimdir"){ // a bu parametor
//     console.log(`Hallo ${a}`);
//     return;
// }
// hallo(); // qrgument

// function daraja(a = Number(a ** 3)){
//     console.log(`javob: ${a}`);
//     return;
// }
// daraja(10);

// function darajalor(b){
//     console.log(`Birinchi javob: ${b ** 2}`);
//     console.log(`Ikkinchi javob: ${b ** 3}`);
//     console.log(`Uchinchi javob: ${b ** 4}`);
// }
// darajalor(12);

// function arifmetik(c,d){
//     console.log(Number( (c + d) / 2 ) );
// }
// arifmetik(2,3);

// function tor(a){
//     console.log(a + 4);
// }
// tor(5);

// function teskari(q,w,e,r,t,y){
//     console.log(y,t,r,e,w,q);
// }
// teskari(1,2,3,4,5,6);

// function qoshu(k,n){
//     console.log(k,n);
// }
// qoshu(10,2);

// function almash(s,o){
//     console.log(o,s);
// }
// almash(10,4);

// function osish(a,b){
//     console.log(Math.max(a,b));
//     console.log(Math.min(a,b));
// }
// osish(2,3);

function kvadratP(a = Number(1)){
    console.log(a * 4);
}
kvadratP(10);
kvadratP(15);
kvadratP(20);
kvadratP(25);
kvadratP();

function kavadratS(b = Number(2)){
    console.log(b * b);
}
kavadratS(11);
kavadratS(22);
kavadratS(33);
kavadratS(44);
kavadratS();

function tortburchak(c,d = Number(2,3)){
    console.log(2*(c + d));
    console.log(c * d);
}
tortburchak(10,12);
tortburchak(11,13);
tortburchak(14,15);
tortburchak(20,9);
tortburchak();

function kub(i = Number(5)){
    console.log(i ** 3);
    console.log(6 * i ** 2)
}
kub(10);
kub(13);
kub(16);
kub(19);
kub(20);
kub();

function orta(q,w = Number(1,3)){
    console.log((q + w) /2);
}
orta(2,4);
orta(5,7);
orta(5,22);
orta(4,8);
orta();

function almash(e,r = Number(1,2)){
    console.log(r,e);
}
almash(3,4);
almash(5,6);
almash(8,7);
almash(5,9);
almash();

function globalAlmash(t,y,u = Number(1,2,3)){
    console.log(u,y,t);
}
globalAlmash(4,5,6);
globalAlmash(9,8,7);
globalAlmash(2,4,7);
globalAlmash();

function konfet(s = Number(1)){
    const narx = Number(10);
    console.log(s * narx + "so'm");
}
konfet(12);
konfet(14);
konfet(17);
konfet(20);
konfet();

function solishtirish(d,f = Number(1,2)){
    const konfet = Number(10);
    console.log(d * konfet + "so'm");
    const shokolad = Number(12);
    console.log(f * shokolad + "so'm");
    
    if (d > f){
        console.log("Konfet narhi qimmatroq");
    }else{
        console.log("Shokolad narhi qimmatroq");
    }
}
solishtirish(12);
solishtirish(14);
solishtirish(17);
solishtirish(20);
solishtirish();