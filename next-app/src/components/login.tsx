'use client';

import { FormEvent, useState } from 'react';
import styles from '../styles/login.module.scss';
import { useRouter } from 'next/navigation';
import { Agent } from '../lib/types/agent';

export default function Login() {

    const [token, setToken] = useState('');
    const router = useRouter();

    async function submitToken(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        let res = await fetch('/api/login', options)
        if (res.status === 200){
            console.log(await res.json() as Agent);
            router.push('dashboard')
        }
    }

    return(
        <form className={styles.login} onSubmit={submitToken}>
            <h3>Please identify yourself:</h3>
            <span>
                <input type='password' placeholder="Agent Token"
                    value={token}
                    onChange={e => setToken(e.currentTarget.value)}
                    required
                ></input>
            </span>
        </form>
    )
}