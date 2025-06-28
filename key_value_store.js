// 📜 Requirements:
// Design a simple key-value store with these operations:

// set(key, value) – Add or update a value

// get(key) – Return the value for a given key

// delete(key) – Remove a key

// has(key) – Return true if key exists

// keys() – Return all keys

class KeyValueStore {
    constructor() {
        this.keyValueStore = new Map()
    }

    set(key, value) {
        if (this.keyValueStore.has(key.toLowerCase())) {
            console.log("the key is already been set");
            return;
        }
        const Lkey = key.toLowerCase();
        const Lvalue = value.toLowerCase();
        this.keyValueStore.set(Lkey, Lvalue);

    }

    list() {
        const result = {};
        for (const [key, value] of this.keyValueStore) {
            result[key] = value;
        }
        return result;
    }

    get(key) {
        const Lkey = key.toLowerCase();
        return this.keyValueStore.get(Lkey)
    }
}

const store = new KeyValueStore()

store.set('name', 'soumay')

console.log(store.list());

console.log(store.get("name"))