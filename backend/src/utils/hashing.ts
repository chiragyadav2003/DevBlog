export const passwordHashing = async (password: string) => {
    const myText = new TextEncoder().encode(password);
    const myDigest = await crypto.subtle.digest(
        {
            name: 'SHA-256',
        },
        myText // The data you want to hash as an ArrayBuffer
    );

    // console.log(new Uint8Array(myDigest));

    // Convert Uint8Array to hexadecimal string
    const hashedPassword = Array.from(new Uint8Array(myDigest))
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');

    console.log("new hashed password ", hashedPassword);
    return hashedPassword
}

// passwordHashing("password");

