import checkRules from "./checkRules.js";

export default (tickets, rules) => {
    const ticketFields = tickets.reduce((fields, ticket) => {
        ticket.forEach((value, position) => {
            const validFields = checkRules(value, rules);

            if (fields.has(position) === false) {
                fields.set(position, validFields);

                return fields;
            }

            const possibleFields = fields.get(position);

            // if possible fields has been wittled down to 1
            if (possibleFields.length === 1) {
                if (validFields.includes(possibleFields[0]) === false) {
                    throw `Position has no valid fields? ${fields}, ${ticket}, ${position}`;
                }

                return;
            }

            fields.set(
                position,
                possibleFields.filter((field) => {
                    return validFields.includes(field);
                })
            );
        });

        return fields;
    }, new Map());

    return assignFields(ticketFields);
};

const assignFields = (fieldMap, structure = {}) => {
    const assignableFields = Array.from(fieldMap.keys()).reduce(
        (accum, position) => {
            const possibleFields = fieldMap.get(position);

            if (possibleFields.length === 1) {
                accum.push([possibleFields[0], position]);
            }

            return accum;
        },
        []
    );

    assignableFields.forEach(([field, position]) => {
        structure[field] = position;

        fieldMap.delete(position);

        // clear assigned field from other map values
        fieldMap.forEach((mapVal, mapKey) => {
            fieldMap.set(
                mapKey,
                mapVal.filter((mvField) => {
                    return mvField !== field;
                })
            );
        });
    });

    // console.log(assignableFields, fieldMap, structure);

    if (fieldMap.size > 0) {
        return assignFields(fieldMap, structure);
    }

    return structure;
};
