let option;
let items = [];

while (option != 3) {
  option = Number(
    prompt(`
  Hello user! Type the number of the desired option

  1. Register an item on the list
  2. Show the registered items
  3. Quit the program
  `)
  );

  switch (option) {
    case 1:
      let item = prompt("Inform the item to be registered");
      items.push(item);
      break;
    case 2:
      if (items.length == 0) {
        alert("There aren't any registered items");
      } else {
        alert(items);
      }
      break;
    case 3:
      alert("Bye, Bye!");
      break;
    default:
      alert("Invalid option, type one of the numbers given at the menu");
      break;
  }
}
