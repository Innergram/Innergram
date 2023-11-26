import Reaction from "./Reaction";

export default interface Message {
    from: string,
    content: string,
    reactions: Reaction[],
    sent_at: number
}