function firstLast(numsAsString) {
    let first = numsAsString.shift();
    let last = numsAsString.pop();

    const result = Number(first) + Number(last);

    console.log(result)
 }

firstLast(['20', '30', '40'])