function focused() {
    Array.from(document.querySelectorAll('input'))
        .forEach(i => {
            i.addEventListener('focus', onFocus);
            i.addEventListener('blur', onBlurr);
        });

    function onFocus(ev) {
        ev.target.parentElemnt.classList.add('focused');
    }

    function onBlurr(ev) {
        ev.target.parentElemnt.classList.remove('focused');
    }
}