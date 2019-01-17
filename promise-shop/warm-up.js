//setTimeout(()=>console.log('TIMED OUT!'), 300);

module.exports = () => {
    setTimeout(() => {
        return `TIMED OUT!`
    }, 300);
};