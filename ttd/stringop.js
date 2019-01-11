
function sqroot(a)
{
    if(a < 0) {
        return ':(';
    }
    return Math.sqrt(a);
}

module.exports = sqroot;