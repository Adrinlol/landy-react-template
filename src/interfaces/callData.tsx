export interface CallData {
    totalEstimatedCost: string,
    totalCallTimeInHours: number,
    totalCallTimeInMinutes: number,
    totalCallTimeInSeconds: number,
    totalUniqueParticipants: number,
    calls: Call[]
}
export interface Call {
    id: string,
    numberOfParticipants: number,
    estimatedCost: number,
    totalCallDurationInSeconds: number,
    callDurationSeconds: number,
    callDurationMinutes: number,
    callDurationHours: number,
    participants: UserBreakdown[],
    callType: string
}
interface UserBreakdown {
    user: User,
    cost: number
}
interface User {
    displayName: string,
    givenName: string,
    surname: string,
    jobTitle: string,
    mail: string,
    id: string,
    wholeSeconds: number,
    wholeMinutes: number,
    wholeHours: number
}