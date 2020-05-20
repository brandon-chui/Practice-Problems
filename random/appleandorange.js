function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applecount = 0;
    let orangecount = 0;

    apples.forEach(apple => {
        let distance = a + apple;
        if(distance >= s && distance <= t) {
            applecount += 1;
        }
    });

    oranges.forEach(orange => {
        let distance = b + orange;
        if(distance >= s && distance <= t) {
            orangecount += 1;
        }
    })

    console.log(applecount);
    console.log(orangecount);

}

// var apple_count = apple.filter(value => value + a >= s && value + a <= t).length;
// var orange_count = orange.filter(value => value + b >= s && value + b <= t).length;