import Message from "./Message";

export default interface Chat {
    participants: string[],
    messages: Message[];
}