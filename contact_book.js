// 📜 Requirements:

// Design a simple contact book with these operations:

// addContact(name, phone) – Add a contact

// deleteContact(name) – Remove a contact

// editContact(name, newPhone) – Update contact's phone

// searchByPrefix(prefix) – Find contacts by name prefix

// listContacts() – Return all contacts

// length() – Return total contact count

class ContactBook {
    constructor() {
        this.contacts = new Map();
    }

    addContact(name, phone) {
        const key = name.toLowerCase();
        if (this.contacts.has(key)) {
            console.log("Contact already exists.");
            return;
        }
        this.contacts.set(key, { name, phone });
    }

    deleteContact(name) {
        const key = name.toLowerCase();
        if (!this.contacts.has(key)) {
            console.log("Contact not found.");
            return;
        }
        this.contacts.delete(key);
    }

    editContact(name, newPhone) {
        const key = name.toLowerCase();
        if (this.contacts.has(key)) {
            this.contacts.get(key).phone = newPhone;
        } else {
            console.log("Contact not found.");
        }
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

    listContacts() {
        return Array.from(this.contacts.values());
    }

    length() {
        return this.contacts.size;
    }
}


const contacts = new ContactBook();

// Add contacts
contacts.addContact('soumay', 1234567890);
contacts.addContact('soujay', 7895741822);

// Delete and check
contacts.deleteContact("soujay");
contacts.deleteContact("soumay");

// Add more
contacts.addContact('soumay', 1234567890);
contacts.addContact('soujay', 7895741822);
contacts.addContact('soumay1', 7412589630);
contacts.addContact('soujay1', 7895741822);

// Edit contact
contacts.editContact('soumay', 1234567890);

// Output checks
console.log("All Contacts:", contacts.listContacts());
console.log("Total Contacts:", contacts.length());
console.log("Search by prefix 'sou':", contacts.searchByPrefix('sou'));
