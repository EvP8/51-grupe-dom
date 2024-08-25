/**
 * Trumpas funkcios veikimo/paskirties aprasas.
 * @param {string} str Ivesties duomuo
 * @returns  Performatuotas tekstas. 
 */
export function capitalize(str) {
    // labas -> Labas
    // LABAS -> Labas
    // labas rytas -> Labas Rytas
    // LABAS RYTAS -> Labas Rytas

    return sstr.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

// capitalize(true);
// capitalize(148562);
// capitalize([]);
// capitalize({});
// capitalize();