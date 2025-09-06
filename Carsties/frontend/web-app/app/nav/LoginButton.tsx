'use client'

import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div>
        <Button outline onClick={() => signIn('id-server', {redirectTo:'/' }, {prompt: 'login'})}>
            Login
        </Button>
    </div>
  )
}
