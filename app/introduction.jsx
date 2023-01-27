
// const introduction = () => {
//   return (
//     <section className="min-h-[30vw] translate-y-10 ">
//         <h2 className="ml-12 font-extrabold text-5xl text-slate-100">Greeting</h2>
//         <p className="ml-14 text-slate-100 mt-6 text-2xl">My name Parzival, <br/> Welcome to my Portfolio.</p>
//     </section>
//   )
// }

// export default introduction
"use client";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()} className="text-red-400">Sign out</button>
      </>
    )
  }
  return (
    <div className="text-white">
      Not signed in <br />
      <button onClick={() => signIn()} className="text-red-600">Sign in</button>
    </div>
  )
}