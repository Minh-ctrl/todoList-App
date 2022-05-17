export interface routine {
    user_id: Number,
    routine_name: String,
    frequency: String,
    importance: String,
    done: boolean
}
export interface user {
    id: Number,
    name: String,
    age: Number,
}
export interface events {
    name: String,
    description: String,
    done: Boolean,
    startDate: Date,
    endDate: Date,
}
export interface today { 
    name: String,
    description: String, 
    done: Boolean,
}
// interface basedEvent {
//     title: string,
//     done: boolean,
//     description: string,
//     date: Date,
// }
// interface quickie extends basedEvent{
//     timeLimit: Date,
// }
// interface routine extends basedEvent{ 
// 	category: "exercise" | "medicine", 
// 	frequency: tfrequency,
// 	importance: 1 | 2 | 3, 
// }
// interface goals {
//     objective: string,
// 	reward: string,
// 	frequency: tfrequency,
// 	timeLimit: Date,
// }
// type tfrequency = "hourly" | "daily" | "weekly"| "monthly"
