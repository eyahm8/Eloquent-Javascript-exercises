function deepEqual(a, b) {

    if (a === b) {

        return true;
    }


    if (a == null || typeof a !="object" || b == null || typeof b != "object") {

        return false;
    }


    var aCount = 0;
    var bCount = 0;

    for (var prop in a)
        aCount += 1;

    for (var prop in b) {

        bCount += 1;

        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }

    return aCount == bCount;

    };
