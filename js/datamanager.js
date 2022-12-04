const save = (key, value) => {
    // key = String
    // value = String
    localStorage.setItem(key, value)
}

const read = (key) => {
    // key = String
    return localStorage.getItem(key);
}

const quit = (key) => {
    // key = String
    localStorage.removeItem(key)
}

const clear = () => {
    localStorage.clear()
}