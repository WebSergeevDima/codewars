function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
    return name + password === 'Santa ClausHo Ho Ho!' ? true : false;
};