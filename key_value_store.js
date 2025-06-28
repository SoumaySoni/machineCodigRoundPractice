// 📜 Requirements:
// Design a simple key-value store with these operations:

// set(key, value) – Add or update a value

// get(key) – Return the value for a given key

// delete(key) – Remove a key

// has(key) – Return true if key exists

// list() – Return all keys

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

    get(key) {
        const Lkey = key.toLowerCase();
        return this.keyValueStore.get(Lkey)
    }

    delete(key) {
        const Lkey = key.toLowerCase();
        this.keyValueStore.delete(Lkey);
    }

    has(key) {
        const Lkey = key.toLowerCase();
        return this.keyValueStore.has(Lkey);
    }

    list() {
        const result = {};
        for (const [key, value] of this.keyValueStore) {
            result[key] = value;
        }
        return result;
    }
}

const store = new KeyValueStore();

// Set values
store.set('name', 'soumay');
store.set('city', 'Indore');
store.set('role', 'developer');

// Trying to set an existing key (should show warning)
store.set('name', 'soumay updated');

// Get values
console.log("Get 'name':", store.get('name'));           // ✅ should print: soumay
console.log("Get 'city':", store.get('city'));           // ✅ should print: indore
console.log("Get 'role':", store.get('role'));           // ✅ should print: developer

// Check existence
console.log("Has 'name'?", store.has('name'));           // ✅ should print: true
console.log("Has 'unknown'?", store.has('unknown'));     // ✅ should print: false

// List all
console.log("All key-value pairs:", store.list());       // ✅ should print all entries as object

// Delete a key
store.delete('role');
console.log("After deleting 'role':", store.list());     // ✅ should not include 'role'

// Verify deletion
console.log("Has 'role'?", store.has('role'));           // ✅ should print: false
