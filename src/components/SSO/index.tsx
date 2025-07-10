import React, { useState, useEffect } from 'react';
import { AccountInfo, InteractionStatus } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { config } from '../../services/config';
import { RequestOAuthLinkTest } from '../../requests/auth';

const SSO: React.FC = () => {
    const { instance, accounts, inProgress } = useMsal();
    const [user, setUser] = useState<AccountInfo | null>(null);

    useEffect(() => {
        if (inProgress === InteractionStatus.None && accounts.length > 0) {
            setUser(accounts[0]);
        }
    }, [accounts, inProgress]);
    //TODO - this
    const handleLogin = async () => {
        try {
            const loginResponse = await instance.loginPopup({
                scopes: [config.scopes.USER]
            });
            instance.setActiveAccount(loginResponse.account);
            console.log(loginResponse)
            await RequestOAuthLinkTest(loginResponse.tenantId, loginResponse.account.username)
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const handleLogout = async () => {
        await instance.logoutPopup();
        localStorage.clear()
        window.location.reload()
    };

    return (
        <div>
            {!user ? (
                <button
                    onClick={handleLogin}
                    style={{
                        backgroundColor: '#2F2F2F',
                        color: 'white',
                        padding: '10px 20px',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        margin: '0 auto'
                    }}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                        alt="Microsoft logo"
                        style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                    Sign in with Microsoft
                </button>
            ) : (
                <div>
                    <button
                        onClick={handleLogout}
                        style={{
                            backgroundColor: '#2F2F2F',
                            color: 'white',
                            padding: '10px 20px',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            margin: '0 auto'
                        }}
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                            alt="Microsoft logo"
                            style={{ width: 20, height: 20, marginRight: 10 }}
                        />
                        Sign out
                    </button>

                </div>
            )}
        </div>
    );
};

export default SSO;