function htmlspecialchars(formData) {

    return formData.split('').map(str => {

        if (str === '<') {
            return '&lt;'
        } else if (str === '>') {
            return '&gt;'
        } else if (str === '"') {
            return '&quot;'
        } else if (str === '&') {
            return '&amp;'
        } else {
            return str;
        }

    }).join('');

}