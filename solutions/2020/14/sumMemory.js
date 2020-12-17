export default (memory) => {
    return Array.from(memory.values()).reduce((sum, value) => {
        return sum + value;
    }, 0);
};
