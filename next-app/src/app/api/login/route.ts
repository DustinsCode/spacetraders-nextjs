import { NextResponse } from "next/server"
import { Agent } from "../../../lib/types/agent";

export async function GET(request: Request){
    let token = request.headers.get('authorization');
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token
        }
    }

    let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my/agent`, options)
    if(res.ok){
        let data = await res.json();
        let agent: Agent = data['data'];
        //TODO: figure out how to ipmlement some kind of session to hold the token in, how to save agent info for use elsewhere
        return NextResponse.json(agent);
    }


    return res;
}