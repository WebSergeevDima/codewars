function contamination(text, char) {
    return text.split('').map(i => char).join('');
}