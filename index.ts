import { SessionId } from "./src/SessionId";

console.log("Create session one.");
const sessionOne = SessionId.create("one");

console.log("Create session one equal.");
const sessionOneEqual = SessionId.create("one");

console.log("Create session two.");
const sessionTwo = SessionId.create("two");

console.log("Result: " + sessionOne.equals(sessionTwo));
console.log("Result: " + sessionOne.equals(sessionOneEqual));
