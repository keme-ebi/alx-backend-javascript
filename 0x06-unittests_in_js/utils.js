class Utils {
  static calculateNumber(type, a, b) {
    const ra = Math.round(a);
    const rb = Math.round(b);

    if (type === 'SUM') return ra + rb;
    if (type === 'SUBTRACT') return ra - rb;
    if (type === 'DIVIDE') return !rb ? 'Error' : ra / rb;
  }
}

module.exports = Utils;
