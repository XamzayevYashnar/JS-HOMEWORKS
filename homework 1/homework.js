
function boluvchilar(son) {
    let arr = [];

    for (let i = 1; i <= son; i++) {
        if (son % i == 0) {
            arr.push(i);
        }
    }

    return arr;
}


let raqamlarYigindisi = (son) => {
    let sum = 0;

    while (son > 0) {
        sum += son % 10;
        son = parseInt(son / 10);
    }

    return sum;
}


function objectYigindi(obj) {
    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }

    return sum;
}


function teskariSon(son) {
    let result = 0;

    while (son > 0) {
        let raqam = son % 10;
        result = result * 10 + raqam;
        son = parseInt(son / 10);
    }

    return result;
}


function engKattaQiymat(obj) {
    let max = obj[Object.keys(obj)[0]];

    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
        }
    }

    return max;
}


function armstrongmi(son) {
    let temp = son;
    let count = 0;

    while (temp > 0) {
        count++;
        temp = parseInt(temp / 10);
    }

    temp = son;
    let sum = 0;

    while (temp > 0) {
        let raqam = temp % 10;
        sum += raqam ** count;
        temp = parseInt(temp / 10);
    }

    return sum == son;
}


function tubSonlarSoni(n) {
    let count = 0;

    for (let i = 2; i <= n; i++) {
        let tub = true;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                tub = false;
                break;
            }
        }

        if (tub) {
            count++;
        }
    }

    return count;
}

function alifboKalitlar(obj) {
    return Object.keys(obj).sort();
}


function unliHarflar(matn) {
    let count = 0;
    let unlilar = "aeiouAEIOU";

    for (let i = 0; i < matn.length; i++) {
        if (unlilar.includes(matn[i])) {
            count++;
        }
    }

    return count;
}


function sonlarniYig(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] == "number") {
            sum += obj[key];
        }
    }

    return sum;
}

function fibonacci(n) {
    let arr = [0, 1];

    while (true) {
        let next = arr[arr.length - 1] + arr[arr.length - 2];

        if (next > n) {
            break;
        }

        arr.push(next);
    }

    return arr;
}


function engUzunString(obj) {
    let longest = "";

    for (let key in obj) {
        if (typeof obj[key] == "string") {
            if (obj[key].length > longest.length) {
                longest = obj[key];
            }
        }
    }

    return longest;
}


function boluvchilarSoni(son) {
    let count = 0;

    for (let i = 1; i <= son; i++) {
        if (son % i == 0) {
            count++;
        }
    }

    return count;
}


function kopProperty(obj1, obj2) {
    let count1 = 0;
    let count2 = 0;

    for (let key in obj1) {
        count1++;
    }

    for (let key in obj2) {
        count2++;
    }

    if (count1 > count2) {
        return obj1;
    } else if (count2 > count1) {
        return obj2;
    } else {
        return "Teng";
    }
}


function hammasiJuft(son) {
    while (son > 0) {
        let raqam = son % 10;

        if (raqam % 2 != 0) {
            return false;
        }

        son = parseInt(son / 10);
    }

    return true;
}


function engYuqoriTalaba(obj) {
    let ism = "";
    let max = 0;

    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            ism = key;
        }
    }

    return ism;
}

function takrorQiymatBor(obj) {
    let values = [];

    for (let key in obj) {
        if (values.includes(obj[key])) {
            return true;
        }

        values.push(obj[key]);
    }

    return false;
}


function yigindisi10(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let temp = i;
        let sum = 0;

        while (temp > 0) {
            sum += temp % 10;
            temp = parseInt(temp / 10);
        }

        if (sum == 10) {
            result.push(i);
        }
    }

    return result;
}


function mukammalSon(son) {
    let sum = 0;

    for (let i = 1; i < son; i++) {
        if (son % i == 0) {
            sum += i;
        }
    }

    return sum == son;
}


function stringlarniBirlashtir(obj) {
    let result = "";

    for (let key in obj) {
        if (typeof obj[key] == "string") {
            result += obj[key];
        }
    }

    return result;
}