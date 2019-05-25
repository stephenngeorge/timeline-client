export interface INode {
    title: string!,
    description: string!,
    status: string!,
    timeline: ITimeline!,
    updated_at: string!,
    created_at: string!
}

export interface ITimeline {
    title: string!,
    _id: string!,
    description: string!,
    nodes: INode[]!,
    updated_at: string!,
    created_at: string!,
    tags: string[],
    author: IUser,
    members: IUser[]
}

export interface IUser {
    username: string!,
    _id: string!,
    created_at: string!,
    updated_at: string!,
    timelines: ITimeline[]!
}

export interface IDashboardProps {
    user: IUser!
}


export interface IAction {
    type: string,
    payload?: any
}

export interface IAuthState {
    type: string!,
    message: string!,
    token: string!,
    data: IUser
}