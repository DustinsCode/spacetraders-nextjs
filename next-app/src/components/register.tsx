'use client';

import { useState } from 'react';
import styles from '../styles/login.module.scss';

export default function Register() {

    const [agentName, setAgentName] = useState('');

    return(
        <form className={styles.login}>
            <h3>Please identify yourself:</h3>
            <span>
                <input type='text' placeholder="Agent Name"
                    value={agentName}
                    onChange={e => setAgentName(e.currentTarget.value)}
                    required
                ></input>
            </span>
        </form>
    )
}