import argon2 from 'argon2';

async function encrypt(password) {
    try {
        const hash = await argon2.hash(password);
        return hash;
    } catch (err) {
        //...
    }
}

async function decrypt(hash, password) {
    try {
        const status = await argon2.verify(hash, password);
        // password match
        return status;
    } catch (err) {
        // internal failure
    }
}

export { decrypt, encrypt };
