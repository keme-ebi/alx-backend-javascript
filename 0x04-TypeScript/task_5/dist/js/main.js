function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits',
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits',
    };
}
// test
var subject1MjC = { credits: 3, brand: 'MajorCredits' };
var subject2MjC = { credits: 4, brand: 'MajorCredits' };
var subject1MinC = { credits: 2, brand: 'MinorCredits' };
var subject2MinC = { credits: 1, brand: 'MinorCredits' };
var sumMajor = sumMajorCredits(subject1MjC, subject2MjC);
var sumMinor = sumMinorCredits(subject1MinC, subject2MinC);
console.log(sumMajor);
console.log(sumMinor);
//# sourceMappingURL=main.js.map