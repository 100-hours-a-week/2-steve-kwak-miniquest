import { add, subtract } from "./operations.js";

import User from "./userProfile.js";

console.log(add(5, 3));
console.log(subtract(10, 4));

const user1 = new User("Alice", 30);
user1.introduce();
