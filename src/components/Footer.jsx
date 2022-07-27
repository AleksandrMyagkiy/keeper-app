import React from 'react';

function Footer() {
    const date = new Date();
    const currentDate = date.getFullYear();
    const iconC = 'ⓒ';

    return (
        <footer>
            <p>Copyright {iconC} {currentDate}</p>
        </footer>
    )
}

export default Footer;