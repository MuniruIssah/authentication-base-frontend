import React, { PropsWithChildren } from 'react';

const AuthenticationCenterLayout = ({ children }: PropsWithChildren) => (
  <div className="w-screen min-h-screen flex items-center justify-center p-6 md:p-0 authentication">
    <main className="bg-white w-full shadow-md max-w-md p-10 flex flex-col gap-4 rounded border border-red-950">
      {children}
    </main>
  </div>
);

export default AuthenticationCenterLayout;
