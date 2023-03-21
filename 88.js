function enough(cap, on, wait) {
    const x = wait + on - cap;
    return x > 0 ? x : 0;
}