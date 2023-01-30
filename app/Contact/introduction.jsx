
"use client";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="w-4/5 md:w-3/5 mx-auto h-80 bg-purple-700 bg-opacity-50 backdrop-blur-sm rounded-lg flex flex-col justify-center items-center gap-4">
        <div className="text-slate-100 text-lg">Signed in as {session.user.email}</div>
        <button onClick={() => signOut()} className="text-black font-bold bg-orange-400 px-4 py-2 rounded-md">Sign out</button>
      </div>
    )
  }
  return (
    <div className="w-4/5 md:w-3/5 mx-auto h-80 bg-purple-700 bg-opacity-50 backdrop-blur-sm rounded-lg flex flex-col justify-center items-center gap-4">
      <div className="text-slate-100 text-lg">Not signed in</div>
      <button onClick={() => signIn()} className="text-black font-bold bg-orange-400 px-4 py-2 rounded-md">Sign in</button>
    </div>
  )
}