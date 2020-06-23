function dividePie(numberOfGuests, radii) {
    radii.sort();
    radii.reverse();
    const pies = radii.map(r => r * r * Math.PI);

    return _dividePie(numberOfGuests, pies, 0, pies.length - 1);
}


function _dividePie(numberOfGuests, pies, lo, hi) {
    if (numberOfGuests === 0 || lo > hi) return 0;
    if (numberOfGuests === 1) return pies[lo];
    if (lo === hi) return pies[lo] / numberOfGuests;

    let max = -1;
    for (let mid = lo; mid <= hi; mid++) {
        for (let n = 1; n <= numberOfGuests - 1; n++) {
            console.log(mid)
            const x = _dividePie(n, pies, lo, mid); // bottom half?
            const y = _dividePie(numberOfGuests - n, pies, mid + 1, hi); // top half?
            max = Math.max(max, Math.min(x, y));
        }
    }
    return max;
}

console.log(dividePie(3, [4, 4, 3]))