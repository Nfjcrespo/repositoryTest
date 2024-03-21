import {findNumber, daysLeftUntilChristmas, multiplication, division, longestString, largestNumber, removeChar, sumOfCubes, compareObject, filterArray, extractValues, deleteRollno, getCylinderVolume, clock, checkCase, add} from "./exo";

describe("findNumber", () => {
    it('case the number is not present in the list', () => {
        Math.random = jest.fn(() => 0.5)
        expect(findNumber(2)).toBe("Not matched");
      });
    
    it('case the number is present in the list', () => {
        Math.random = jest.fn(() => 0.5)
        expect(findNumber(6)).toBe("Good Work");
    });
    
})

describe("daysLeftUntilChristmas", () => {
    it("return the awaited number of days until christmas", () => {
        jest.useFakeTimers().setSystemTime(new Date('2024-02-26'));
        expect(daysLeftUntilChristmas()).toBe(302);
    })
})

describe("multiplication", () => {
    it('case the values of args are both positives', () => {
        expect(multiplication(2, 3)).toBe(6);
    });
    
    it('case one value is negative', () => {
        expect(multiplication(-3, 5)).toBe(-15);
    })
})

describe("division", () => {
    it('case both numbers are positives', () => {
        expect(division(6, 3)).toBe(2);
    });

    it('case one number is negative', () => {
        expect(division(-8, 4)).toBe(-2);
    })
})

describe("longestString", () => {
    it('return longest string of an array', () => {
        const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
        expect(longestString(items)).toBe("communiqué");
    });
})

describe("largestNumber", () => {
    it('return the largest number', () => {
        const array = [56, 5, 66, 33, 99, 3, 9];
        expect(largestNumber(array)).toBe(99);
    });
})

describe("remouveChar", () => {
    it('remouve chars that appears more than once', () => {
        expect(removeChar("comportement")).toBe("cprn");
    });
})

describe("sumOfCubes", () => {
    it('return the sum of cubes of all numbers betwen 1 and the given number', () => {
        expect(sumOfCubes(5)).toBe(225);
    })
})

describe("compareObject", () => {
    it('case the two objects are equals', () => {
        expect(compareObject({nom : "lucas", prenom: "luc"}, {nom : "lucas", prenom: "luc"})).toBe(true);
    });

    it('case the two objects are diferents', () => {
        expect(compareObject({nom : "lucas", prenom: "lucatony"}, {nom : "lucas", prenom: "luc"})).toBe(false);
    });
})

describe("filterArray", () => {
    it("case the values are in the array", () => {
        expect(filterArray([3, 4, 6, 7, 8, 23], 3, 7)).toEqual([4, 6, 8, 23]);
    });

    it("case the values are not in the array", () => {
        expect(filterArray([3, 4, 6, 7, 8, 23], 5, 10)).toEqual([3, 4, 6, 7, 8, 23]);
    });
})

describe("extractValues", () => {
    it('case the indexes are in array', () => {
        expect(extractValues([2, 4, 5, 8, 4, 7], 2, 4)).toEqual([5, 4]);
    });

    it('case the indexes are not in array', () => {
        expect(extractValues([2, 4, 5, 8, 4, 7], 6, 8)).toEqual([]);
    });
})

describe("getCylinderVolume", () => {
    it('get the volume of a Cylinder with four decimal places', () => {
        class Cylinder {
            constructor(radius, height){
                this.radius = radius;
                this.height = height;
            }
        
            get volume(){
                let volume = (3.14 * 2 * this.radius * this.height).toFixed(4);
                return parseFloat(volume);
            }
        }
        const cylender = new Cylinder(4.34, 6);
    
        expect(getCylinderVolume(cylender)).toBe(163.5312);
    });
})

describe("checkCase", () => {
    it('case the string is in LowerCase', () => {
        expect(checkCase("manger")).toBe(true);
    });

    it('case the string is not in LowerCase', () => {
        expect(checkCase("Lucas")).toBe(false);
    });
})

describe("add", () => {
    it('case the function haves two numbers in args', () => {
        return expect(add(3, 5)).resolves.toBe(8);;
    });

    it('case the function haves only one number in args', () => {
        return expect(add(3)).rejects.toEqual(new Error("Must provide two parameters"));
    });
});
