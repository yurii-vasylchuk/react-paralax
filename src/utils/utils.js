export const extractPropsClassList = (className) => {
    const externalClasses = [];

    if (className && Array.isArray(className)) {
        externalClasses.push(...className);
    } else if (className && typeof className === 'string') {
        externalClasses.push(className);
    }

    return  externalClasses;
};

export const capitalize = (str) => {
    if (typeof str !== 'string' || str.length < 1) {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};
