    const url=`https://api.github.com/users/ankush-w17`;


    async function handlePromise(){


        const data= await fetch(url);

        const jsonValue=await data.json();
        
        console.log(jsonValue);
    }

    handlePromise()