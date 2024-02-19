// pages/_app.tsx
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';

function App({ Component, pageProps, signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <Component {...pageProps} />
    </>
  );
}

export default withAuthenticator(App);