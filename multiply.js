function multiplyChallenge(a, b) {
    let iterator = 1;
    let result = 0;
    do {
        result += a;
        iterator++;
    } while (iterator <= b);

    return result;
};

console.log(multiplyChallenge(5, 9));