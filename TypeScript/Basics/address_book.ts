
import * as readline from "readline-sync";

class Contact {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    number: string;
    email: string;

    constructor(
        firstName: string,
        lastName: string,
        address: string,
        city: string,
        state: string,
        zip: string,
        number: string,
        email: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.number = number;
        this.email = email;
    }
}

class AddressBook {
    name: string;
    contactList: Contact[] = [];

    constructor(name: string) {
        this.name = name;
    }

    isDuplicate(firstName: string): boolean {
        return this.contactList.some(
            c => c.firstName.toLowerCase() === firstName.toLowerCase()
        );
    }

    addContact(): void {
        const first = readline.question("First Name: ");
        if (this.isDuplicate(first)) {
            console.log(`Error: Contact '${first}' already exists in this address book!`);
            return;
        }

        const last = readline.question("Last Name: ");
        const address = readline.question("Address: ");
        const city = readline.question("City: ");
        const state = readline.question("State: ");
        const zip = readline.question("Zip: ");
        const number = readline.question("Phone Number: ");
        const email = readline.question("Email: ");

        const newContact = new Contact(
            first, last, address, city, state, zip, number, email
        );

        this.contactList.push(newContact);
        console.log("Contact added successfully!");
    }

    editContact(): void {
        const name = readline.question("Enter First Name of contact to be edited: ");

        for (const contact of this.contactList) {
            if (contact.firstName === name) {
                console.log(`Re-enter details for ${name}`);
                contact.firstName = readline.question("First Name: ");
                contact.lastName = readline.question("Last Name: ");
                contact.address = readline.question("Address: ");
                contact.city = readline.question("City: ");
                contact.state = readline.question("State: ");
                contact.zip = readline.question("Zip: ");
                contact.number = readline.question("Phone Number: ");
                contact.email = readline.question("Email: ");
                console.log("Contact updated!");
                return;
            }
        }
        console.log("Contact not found!");
    }

    deleteContact(): void {
        const name = readline.question("Enter the name of contact to be deleted: ");
        const index = this.contactList.findIndex(c => c.firstName === name);

        if (index !== -1) {
            this.contactList.splice(index, 1);
            console.log("Contact deleted successfully!");
        } else {
            console.log("Contact not found!");
        }
    }

    addMultiple(): void {
        const n = Number(readline.question("Enter number of people to be added: "));
        for (let i = 0; i < n; i++) {
            console.log(`\nEnter details for person ${i + 1}`);
            this.addContact();
        }
    }
}

class AddressBookSystem {
    addressBookDict: Map<string, AddressBook> = new Map();

    createAddressBook(): AddressBook | null {
        const name = readline.question("Enter the name of the address book: ");

        if (this.addressBookDict.has(name)) {
            console.log(`Error: Address book '${name}' already exists!`);
            return null;
        }

        const newBook = new AddressBook(name);
        this.addressBookDict.set(name, newBook);
        console.log(`Address book '${name}' created successfully!\n`);
        return newBook;
    }

    selectAddressBook(): AddressBook | null {
        if (this.addressBookDict.size === 0) {
            console.log("No address books available.");
            return null;
        }

        console.log("\nAvailable Address Books:");
        for (const name of this.addressBookDict.keys()) {
            console.log(`- ${name}`);
        }

        const bookName = readline.question("Enter address book name: ");
        return this.addressBookDict.get(bookName) || null;
    }

    displayAllBooks(): void {
        if (this.addressBookDict.size === 0) {
            console.log("No address books in system.");
            return;
        }

        console.log("\nAll Address Books:");
        for (const [name, book] of this.addressBookDict) {
            console.log(`- ${name} (${book.contactList.length} contacts)`);
        }
    }

    searchByCity(city: string): Contact[] {
        const results: Contact[] = [];
        for (const book of this.addressBookDict.values()) {
            results.push(...book.contactList.filter(
                c => c.city.toLowerCase() === city.toLowerCase()
            ));
        }
        return results;
    }

    searchByState(state: string): Contact[] {
        const results: Contact[] = [];
        for (const book of this.addressBookDict.values()) {
            results.push(...book.contactList.filter(
                c => c.state.toLowerCase() === state.toLowerCase()
            ));
        }
        return results;
    }

    countByCity(): Map<string, number> {
        const map = new Map<string, number>();
        for (const book of this.addressBookDict.values()) {
            for (const c of book.contactList) {
                map.set(c.city, (map.get(c.city) || 0) + 1);
            }
        }
        return map;
    }

    countByState(): Map<string, number> {
        const map = new Map<string, number>();
        for (const book of this.addressBookDict.values()) {
            for (const c of book.contactList) {
                map.set(c.state, (map.get(c.state) || 0) + 1);
            }
        }
        return map;
    }
}

function main(): void {
    console.log("Welcome to Address Book System");
    const system = new AddressBookSystem();
    let currentBook: AddressBook | null = null;

    while (true) {
        console.log("\n1. Create Address Book");
        console.log("2. Select Address Book");
        console.log("3. Display All Address Books");
        console.log("4. Exit");

        if (currentBook) {
            console.log(`\nCurrently working with: ${currentBook.name}`);
            console.log("5. Add Contact");
            console.log("6. Add Multiple Contacts");
            console.log("7. Edit Contact");
            console.log("8. Delete Contact");
        }

        const choice = readline.question("Enter choice: ");

        switch (choice) {
            case "1":
                currentBook = system.createAddressBook();
                break;
            case "2":
                currentBook = system.selectAddressBook();
                break;
            case "3":
                system.displayAllBooks();
                break;
            case "4":
                console.log("Thank you!");
                return;
            case "5":
                currentBook?.addContact();
                break;
            case "6":
                currentBook?.addMultiple();
                break;
            case "7":
                currentBook?.editContact();
                break;
            case "8":
                currentBook?.deleteContact();
                break;
            default:
                console.log("Invalid choice!");
        }
    }
}

main();
