import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

    const authToken = (await cookies()).get("_auth")?.value
  
    if (!authToken) {
      redirect("/")
    }
    
  return (
    <div className="bg-orange-200/5 py-20">
        {children}
    </div>
  )
}

