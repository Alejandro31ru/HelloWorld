function gameSeasons() {
    let monthNumber = Number(prompt('Введите порядковый номер месяяца'));
    if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        return alert(`${monthNumber}-й месяц относится к зиме`);
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        return alert(`${monthNumber}-й месяц относится к весне`);
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        return alert(`${monthNumber}-й месяц относится к лету`);
    } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
        return alert(`${monthNumber}-й месяц относится к осени`);
    } else if (monthNumber === 13) {
        return alert(`${monthNumber}-й месяц в календаре майя назывался Мак и приходился на весну`);
    } else if (monthNumber === 14) {
        return alert(`${monthNumber}-й месяц в календаре майя назывался К'ан-к'ин и приходился на весну`);
    } else if (monthNumber === 15) {
        return alert(`${monthNumber}-й месяц в календаре майя назывался Муан и приходился на весну`);
    } else if (monthNumber === 16) {
        return alert(`${monthNumber}-й месяц в календаре майя назывался Паш и приходился на весну`);
    } else if (monthNumber === 17) {
        return alert(`${monthNumber}-й месяц в календаре майя назывался К'айяб и приходился на лето`);
    } else if (monthNumber === 18) {
        return alert(`${monthNumber}-й месяц в календаре майя назывался Кумху и приходился на лето`);
    } else if (monthNumber > 18 && monthNumber < 25) {
        return alert(`${monthNumber}-й месяц существует в Марсианском календаре. Ты, часом, не оттуда?`);
    } else if (monthNumber > 24) {
        return alert(`В твоём календаре есть ${monthNumber}-й месяц? Не часто ты празднуешь День Рождения...`);
    } else {
        return alert('Это вообще число???');
    }
}
// gameSeasons();