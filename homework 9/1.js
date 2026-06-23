function countViewels(text){
    let arr = text.split('');
    let unli = ['a', 'e ', 'i', 'o', 'u']
    let count = 0

    arr.forEach(element => {
            for (un of unli){
                if (element === un){
                    count++
                }
            }
    });

    console.log(`Umumumiy ${count} undosh`)
}

countViewels('Salom Dunyo')