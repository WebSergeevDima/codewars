function _if(bool, func1, func2) {
    arguments[0] ? func1() : func2();
}