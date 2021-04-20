const type = require("./contacts");

// type.listContacts()

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      type.listContacts();
      break;

    case "get":
      type.getContactById(id);
      break;

    case "add":
        type.addContact(name,email,phone)
      break;

    case "remove":
        type.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
