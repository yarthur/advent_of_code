const validateNumberRange = (value, floor, ceiling) => {
    const num = value * 1;

    if (isNaN(num) === true) {
        return false;
    }

    if (num < floor) {
        return false;
    }

    if (num > ceiling) {
        return false;
    }

    return true;
};
export const validateRequiredFields = (passport) => {
    const passportKeys = Object.keys(passport);
    const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

    return requiredFields.every((key) => {
        return passportKeys.includes(key);
    });
};

export const fieldValidators = new Map([
    [
        "byr",
        (field) => {
            return validateNumberRange(field, 1920, 2002);
        },
    ],
    [
        "iyr",
        (field) => {
            return validateNumberRange(field, 2010, 2020);
        },
    ],
    [
        "eyr",
        (field) => {
            return validateNumberRange(field, 2020, 2030);
        },
    ],
    [
        "hgt",
        (field) => {
            const height = field.match(/^(\d*)(in|cm)$/);

            if (height === null) {
                return false;
            }

            const heightVal = height[1];

            switch (height[2]) {
                case "cm":
                    return validateNumberRange(heightVal, 150, 193);

                    // eslint-disable-next-line no-unreachable
                    break;

                case "in":
                    return validateNumberRange(heightVal, 59, 76);

                    // eslint-disable-next-line no-unreachable
                    break;

                default:
                    return false;
            }
        },
    ],
    [
        "hcl",
        (field) => {
            return /^#[\da-fA-F]{6}$/.test(field);
        },
    ],
    [
        "ecl",
        (field) => {
            const validValues = [
                "amb",
                "blu",
                "brn",
                "gry",
                "grn",
                "hzl",
                "oth",
            ];

            return validValues.includes(field);
        },
    ],
    [
        "pid",
        (field) => {
            return /^[\d]{9}$/.test(field);
        },
    ],
]);

export default (passport) => {
    if (validateRequiredFields(passport) === false) {
        return false;
    }

    return Object.keys(passport).every((fieldName) => {
        const validator = fieldValidators.get(fieldName);

        return !validator || validator(passport[fieldName]);
    });
};
