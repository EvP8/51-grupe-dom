/**
 * Sugeneruoja <header> elemento HTML ir įstato į DOM.
 * @param {string} currentHref Norimos pažymėti nuorodos `href` reikšmė
 */
export function header(currentHref) {
    const navData = [
        {
            href: '',
            text: 'Pagrindinis',
        },
        {
            href: 'services',
            text: 'Paslaugos',
        },
        {
            href: 'team',
            text: 'Komanda',
        },
        {
            href: 'basketball',
            text: 'Krepšinis',
        },
        {
            href: 'scoreboard',
            text: 'Švieslentė',
        },
        {
            href: 'snake',
            text: 'Gyvatėlė',
        }, 
    ];

    let navHTML = '';

    for (const link of navData) {
        let classes = '';

        if (currentHref === link.href) {
            classes = 'link active';
        } else {
            classes = 'link';
        }

        navHTML += `<a class="${classes}" href="../${link.href}">${link.text}</a>`;
    }

    const headerHTML = `
        <header class="header">
            <img class="logo" src="../logo.svg" alt="logo">
            <nav class="nav">${navHTML}</nav>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

export function header2(currentHref) {
    const data = [
        { href: '', text: 'Pagrindinis' },
        { href: 'services', text: 'Paslaugos' },
        { href: 'team', text: 'Komanda' },
    ];

    const linkHTML = [];

    for (const { href, text } of data) {
        linkHTML.push(
            `<a class="link ${currentHref === href ? 'active' : ''}" href="../${href}">${text}</a>`
        );
    }

    const HTML = `<header class="header">
            <img class="logo" src="../logo.png" alt="logo">
            <nav class="nav">${linkHTML.join('')}</nav>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', HTML);
}