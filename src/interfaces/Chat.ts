import Message from "./Message";

export default interface Chat {
    participants: string[],
    messages: { sent_at: number }[];
}