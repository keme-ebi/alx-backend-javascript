interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits',
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits',
    };
}

// test
// const subject1MjC: MajorCredits = { credits: 3, brand: 'MajorCredits' };
// const subject2MjC: MajorCredits = { credits: 4, brand: 'MajorCredits' };

// const subject1MinC: MinorCredits = { credits: 2, brand: 'MinorCredits' };
// const subject2MinC: MinorCredits = { credits: 1, brand: 'MinorCredits' };

// const sumMajor = sumMajorCredits(subject1MjC, subject2MjC);
// const sumMinor = sumMinorCredits(subject1MinC, subject2MinC);

// console.log(sumMajor);
// console.log(sumMinor);