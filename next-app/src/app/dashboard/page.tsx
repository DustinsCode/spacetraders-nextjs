'use client';
export default function Dashboard() {
    //TODO, this might not have to be a client component or us sessionStorage, need to figure out how wrap with a session
    let agentName = sessionStorage.getItem('agent')
    return(
        <div>
            <h1>Welcome, {agentName}</h1>
        </div>
    )
}