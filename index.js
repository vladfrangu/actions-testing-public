const crypto = require('node:crypto');
const os = require('node:os');

const maskCommand = (input) => `::add-mask::${input}`;

function testOut(i) {
    const mySecret = crypto.randomUUID();

    process.env.MY_SECRET = mySecret;

    const cmd = maskCommand(mySecret);

    if (i % 5 === 0) {
        process.stdout.write(`Middle of the sentence`);
        process.stdout.write(cmd + os.EOL);

        console.log(`My env variable is: ${process.env.MY_SECRET}`);
    } else if (i % 12 === 0) {
        process.stdout.write(`${os.EOL}${cmd}${os.EOL}`);

        console.log(`My env variable is: ${process.env.MY_SECRET}`);
    } else {
        console.log(cmd);

        console.log(`My env variable is: ${process.env.MY_SECRET}`);
    }
}

for (let i = 0; i < 100; i++) {
    testOut(i);
}