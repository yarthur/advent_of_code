export default (input) => {
    const batchArray = input.split("\n\n");

    return batchArray.map((passport) => {
        const passportFields = {};
        const cleanedPassportData = passport.replace(/\n/g, " ");
        const passportFieldData = cleanedPassportData.split(" ");

        passportFieldData.forEach((field) => {
            const [key, value] = field.split(":");

            passportFields[key] = value;
        });

        return passportFields;
    });
};
