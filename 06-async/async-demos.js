(() => {
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y
        console.log(`   [@service] returning result`)
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`);
        const result = addSync(x,y)
        console.log(`[@client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient

    function addAsync(x,y, cb){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => {
            const result = x + y
            console.log(`   [@service] returning result`)
            cb(result);
        }, 4000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering the service`);
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`);
        });
        
    }

    window['addAsyncClient'] = addAsyncClient

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(() => {
                const result = x + y
                console.log(`   [@service] returning result`)
                resolveFn(result); // communicating the result to the promise
            }, 4000);
        });
        return p;
    }

     

    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        const p = addAsyncPromise(100,200);
        p.then(function(result){
            console.log(`[@client] result = ${result}`);
        })
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        /* 
        const p = addAsyncPromise(x,y);
        const result = await p;
        console.log(`[@client] result = ${result}`); 
        */

        const result = await addAsyncPromise(x,y);
        console.log(`[@client] result = ${result}`);
        return result * 2;
        
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;
})()