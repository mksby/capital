module.exports = input => {
    if (!input) {
        return false;
    }

    if (Object.prototype.toString.call(input) !== '[object String]') {
        return false;
    }

    if (!/^[a-zA-Z]/.test(input)) {
        return false;
    }

    return input[0] === input[0].toUpperCase();
};
