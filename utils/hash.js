import crypto from "crypto";

export const getSalt = () => {
    return crypto
        .randomBytes(30)
        .toString("base64url")
        .substring(0, process.env.SALT);
};

export const hashPassword = (text, salt) => {
    const newMsg = salt + text;
    const hashing = crypto.createHash("sha256");
    // md4 md5 sha1 sha224 sha256 sha 284 sha512
    const hash = hashing.update(newMsg).digest("base64url");
    // binary hex base64 base64url
    //console.log(salt + hash);
    return hash;
};
/*{
    "username": "pig",
    "password": "pig",
    "first_name": "piglet",
    "last_name": "chiglet",
    "birthdate": "2000-04-20",
    "email": "pige@chiget.com",
    "points": 0
  }
    */