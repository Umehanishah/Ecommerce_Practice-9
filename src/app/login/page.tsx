import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"


export default function Home() {
    return (
      <main>
      
      {/*1st section */}
      <section>
        <div className="mx-14 pt-10 pb-10">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/login" className="text-black font-bold">Login</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

        </div>
    </section>

    {/*2nd section */}
    <section className="mx-14 pt-5 pb-20">
      <div className="flex gap-10">
      <div className="hidden md:block">
        <Image src="/img-15.png" alt="singup" width={500} height={100}/>
      </div>
      
      <div>
    <Card className="w-[350px] pt-5">
      <CardHeader>
        <CardTitle>Log In to Exclusive</CardTitle>
        <CardDescription>Enter your details below</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            
            <div className="flex flex-col space-y-1.5">
              <Input id="email" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input id="password" placeholder="Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="bg-red-500 px-10">Log In</Button>
        <p className="bg-transparent border-none text-xs px-10 text-red-500">
          Forget Password?
        </p>
      </CardFooter>
    </Card>
    </div>
    </div>
    </section>
    </main>
    )
}