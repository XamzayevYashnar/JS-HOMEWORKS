// 7
function joriyOyKunlari() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

// 8
function kabisaYili(yil) {
    return new Date(yil, 1, 29).getDate() === 29;
}

// 9
function yangiYilgacha() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    return Math.ceil((nextYear - now) / (1000 * 60 * 60 * 24));
}

// 10
function yuzKunKeyin() {
    const date = new Date();
    date.setDate(date.getDate() + 100);
    return date;
}

// 11
function ellikKunOldin() {
    const date = new Date();
    date.setDate(date.getDate() - 50);
    return date;
}

// 12
function kunFarqi(sana1, sana2) {
    return Math.abs((new Date(sana2) - new Date(sana1)) / (1000 * 60 * 60 * 24));
}

// 13
function damOlishmi(sana) {
    const day = new Date(sana).getDay();
    return day === 0 || day === 6 ? "Dam olish kuni" : "Ish kuni";
}

// 14
function joriyVaqt() {
    const now = new Date();
    return now.toLocaleTimeString("en-GB");
}

// 15
function oyNomi(sana) {
    const oylar = [
        "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
        "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"
    ];
    return oylar[new Date(sana).getMonth()];
}

// 16
function yashaganKunlar(tugilganSana) {
    return Math.floor((new Date() - new Date(tugilganSana)) / (1000 * 60 * 60 * 24));
}

// 17
function vaqtQismi() {
    const soat = new Date().getHours();

    if (soat >= 5 && soat < 12) return "Ertalab";
    if (soat >= 12 && soat < 18) return "Kunduzi";
    if (soat >= 18 && soat < 22) return "Kechqurun";
    return "Tun";
}

// 18
function birinchiKun(yil) {
    const kunlar = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"];
    return kunlar[new Date(yil,0,1).getDay()];
}

// 19
function oxirgiKun(yil) {
    const kunlar = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"];
    return kunlar[new Date(yil,11,31).getDay()];
}

// 20
function yakshanbalarSoni(yil, oy) {
    let count = 0;
    const days = new Date(yil, oy, 0).getDate();

    for (let i = 1; i <= days; i++) {
        if (new Date(yil, oy - 1, i).getDay() === 0) {
            count++;
        }
    }

    return count;
}

// 21
function haftaFarqi(sana1, sana2) {
    return Math.floor(
        Math.abs(new Date(sana2) - new Date(sana1)) /
        (1000 * 60 * 60 * 24 * 7)
    );
}

// 22
function oyTugashigacha() {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return end.getDate() - now.getDate();
}

// 23
function tugilganKungacha(tugilganSana) {
    const now = new Date();
    const birth = new Date(tugilganSana);

    let next = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());

    if (next < now) {
        next.setFullYear(now.getFullYear() + 1);
    }

    return Math.ceil((next - now) / (1000 * 60 * 60 * 24));
}

// 24
function keyingiDushanba(sana) {
    let date = new Date(sana);

    while (date.getDay() !== 1) {
        date.setDate(date.getDate() + 1);
    }

    return date;
}

// 25
function oldingiJuma(sana) {
    let date = new Date(sana);

    while (date.getDay() !== 5) {
        date.setDate(date.getDate() - 1);
    }

    return date;
}

// 26
function kalendar(yil, oy) {
    const days = new Date(yil, oy, 0).getDate();

    for (let i = 1; i <= days; i++) {
        console.log(i);
    }
}

// 27
function damOlishKunlari(yil) {
    let count = 0;

    for (let i = 1; i <= 12; i++) {
        const days = new Date(yil, i, 0).getDate();

        for (let j = 1; j <= days; j++) {
            const day = new Date(yil, i - 1, j).getDay();

            if (day === 0 || day === 6) {
                count++;
            }
        }
    }

    return count;
}

// 28
function ishKunlari(sana1, sana2) {
    let count = 0;
    let date = new Date(sana1);

    while (date <= new Date(sana2)) {
        const day = date.getDay();

        if (day !== 0 && day !== 6) {
            count++;
        }

        date.setDate(date.getDate() + 1);
    }

    return count;
}

// 29
function nechaOyBoldi(sana) {
    const now = new Date();
    const product = new Date(sana);

    return (
        (now.getFullYear() - product.getFullYear()) * 12 +
        (now.getMonth() - product.getMonth())
    );
}

// 30
function yoshHisobla(tugilganSana) {
    const now = new Date();
    const birth = new Date(tugilganSana);

    const yillar = now.getFullYear() - birth.getFullYear();
    const oylar = yillar * 12 + (now.getMonth() - birth.getMonth());
    const kunlar = Math.floor((now - birth) / (1000 * 60 * 60 * 24));

    return {
        yosh: yillar,
        yashaganOylar: oylar,
        yashaganKunlar: kunlar,
        yashaganYillar: yillar
    };
}