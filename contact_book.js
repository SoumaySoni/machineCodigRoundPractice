class ContactBook {
    constructor() {
        this.contacts = new Map();
    }

    addContact(fname, phone) {
        const key = fname.toLowerCase();
        if (this.contacts.has(key)) {
            console.log("the contact is already in the contact book");
            return;
        }
        this.contacts.set(key, { fname, phone });
    }

    listContacts() {
        return Array.from(this.contacts.values());
    }

    deleteContacts(fname) {
        const key = fname.toLowerCase();
        if (!this.contacts.has(key)) {
            console.log("Contact not found");
            return;
        }
        this.contacts.delete(key);
    }


    length() {
        return this.contacts.size;
    }

    searchByPrefix(prefix) {
        const result = [];
        const lowerPrefix = prefix.toLowerCase();

        for (const [key, contact] of this.contacts) {
            if (key.startsWith(lowerPrefix)) {
                result.push(contact);
            }
        }

        return result;
    }

    editContact(fname, newPhone) {
        let key = fname.toLowerCase();
        if (this.contacts.has(key)) {
            this.contacts.get(key).phone = newPhone;
        } else {
            console.log("Contact not found");
        }
    }
}


const contacts = new ContactBook();
contacts.addContact('soumay', 8299421734)
contacts.addContact('soujay', 7895741822)

// console.log(contacts.listContacts())
contacts.deleteContacts("soujay")
// console.log(contacts.listContacts())
contacts.deleteContacts("soumay")
// console.log(contacts.listContacts())

contacts.addContact('soumay', 8299421734)
contacts.addContact('soujay', 7895741822)

// console.log(contacts.listContacts())
// console.log(contacts.length())

contacts.addContact('soumay1', 8299421734)
contacts.addContact('soujay1', 7895741822)

// console.log(contacts.length())

// console.log(contacts.searchByPrefix('soumay'))

contacts.editContact('soumay', 123456789);

console.log(contacts.listContacts());