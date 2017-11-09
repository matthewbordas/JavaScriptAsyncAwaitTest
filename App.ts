async function runner(): Promise<Error | null> {
    try {
        await promiseError();
    }
    catch (error) {
        console.log(error);
    }
    return new Error('error');
}

function promiseError(): Promise<object | null> {
    return new Promise((resolve, reject) => {
        resolve(new String('ok'));
    });
}

// This should run fine
runner();