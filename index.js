const crypto = require('node:crypto');
const os = require('node:os');

const maskCommand = (input) => `::add-mask::${input}`;

function testOut(i) {
    const mySecret = crypto.randomUUID();

    process.env.MY_SECRET = mySecret;

    const cmd = maskCommand(mySecret);

    if (i % 5 === 0) {
        process.stdout.write(`Middle of the sentence with no space`);
        process.stdout.write(cmd + os.EOL);

        console.log(`My env variable is: ${process.env.MY_SECRET}`);
    } else if (i % 12 === 0) {
        process.stdout.write('% 12, wrapping the cmd in EOL');
        process.stdout.write(`${os.EOL}${cmd}${os.EOL}`);

        console.log(`My env variable is: ${process.env.MY_SECRET}`);
    } else if (i % 6 === 0) {
        process.stdout.write(`Middle of the sentence with spaces`);
        process.stdout.write(` ${cmd}${os.EOL}`);

        console.log(`My env variable is: ${process.env.MY_SECRET}`);
    } else {
        console.log(cmd);

        console.log(`My env variable is: ${process.env.MY_SECRET}`);
    }
}

const mySecret2 = 'wow-a-secret-mom-get-the-camera';

for (let i = 0; i < 24; i++) {
    testOut(i);
}

for (let i = 0; i < 24; i++) {
    const cmd = maskCommand(mySecret2);

    process.stdout.write(`${os.EOL}${cmd}${os.EOL}`);

    console.log(`My env variable is: ${mySecret2}`);
}
