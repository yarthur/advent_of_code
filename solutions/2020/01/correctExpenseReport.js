export default (entries) => {
    return entries.reduce((expense, entry) => {
        return expense * entry;
    }, 1);
};
