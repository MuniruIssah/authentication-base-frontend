import { PropsWithChildren } from 'react';

const AuthenticationGridLayout = ({ children }: PropsWithChildren) => (
  <div className="w-screen min-h-screen grid md:grid-cols-2 ">
    <aside className="hidden md:flex authenticationII" />
    <main className="flex flex-col items-center justify-center">
      {children}
    </main>
  </div>
);

export default AuthenticationGridLayout;
