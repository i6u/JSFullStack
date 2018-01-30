function testSometing() {
    console.log("执行testSometing");             // 2 执行testSometing
    return "testSometing";
}

async function testAsync() {
    console.log("执行testAsync");                // 6 执行testAsync
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");               // 1 test start...
    const v1 = await testSometing(); //关键点1
    console.log(v1);                            // 5 testSometing
    const v2 = await testAsync();
    console.log(v2);                            // 8 hello async
    console.log(v1, v2);                        // 9 testSometing hello async
}

test();

var promise = new Promise((resolve) => {
    console.log("promise start..");             // 3 promise start..
    resolve("promise ...");
}); //关键点2
promise.then((val) => console.log(val));        // 7 promise ...

console.log("test end...");                     // 4 test end...


/*

test start...
执行testSometing
promise start..
test end...
testSometing
执行testAsync
promise
hello async
testSometing hello async

*/