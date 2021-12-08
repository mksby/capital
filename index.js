module.exports = input => {
    if (!input) {
        return false;
    }

    if (Object.prototype.toString.call(input) !== '[object String]') {
        return false;
    }

    return /^[A-Z]/.test(input);
};
