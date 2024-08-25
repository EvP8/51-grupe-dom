/**
 * Gautas tekstas yra performatuojamas taip, jog visos raides tampa mazosios isskyrus pirmos tampa didziosiomis.
 * @param {string} str Ivesties duomuo
 *  @example
 * // returns "Labas"
 * globalNS.method1(labas);
 * @example
 * // returns "Labas Rytas"
 * globalNS.method(LABAS RYTAS);
 * @returns  Performatuotas tekstas. 
 */
export function capitalize(str) {
    // labas -> Labas
    // LABAS -> Labas
    // labas rytas -> Labas Rytas
    // LABAS RYTAS -> Labas Rytas

    return str.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

// capitalize(true);
// capitalize(148562);
// capitalize([]);
// capitalize({});
// capitalize();