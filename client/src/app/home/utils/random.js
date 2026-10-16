const random = (min, max) => {
    const randVal = min + Math.random() * (max - min);

    return Math.round(randVal * 10) / 10;
}

export default random;