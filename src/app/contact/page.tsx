
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";


export default function Home() {
    return (
      <main>
      
      {/*1st section */}
      <section>
        <div className="mx-5 md:mx-10 lg:mx-14 pt-10 pb-10">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/Contact" className="text-black font-bold">Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

        </div>
    </section>

    {/*2nd section */}
            <section className="mx-5 md:mx-10 lg:mx-14">
                <div className="md:flex gap-5 pt-5 pb-10">
                    <div className="bg-transparent border-2 border-gray-200 rounded-md p-5">
                        <h2 className="flex gap-5 text-base font-semibold items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone-call bg-red-500 rounded-full p-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>
                            Call To Us</h2>
                        <p className="pt-5">We are available 24/7, 7 days a week.</p>
                        <p className="pt-3 pb-5">Phone: +880183423412</p>

                        <hr/>

                        <h2 className="flex gap-5 text-base font-semibold items-center pt-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail bg-red-500 rounded-full p-1"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                           Write To Us</h2>
                        <p className="pt-5">We are available 24/7, 7 days a week.</p>
                        <p className="pt-3 pb-5">Phone: +880183423412</p>
                    </div>
                    <div>

                    </div>

                    <div className="bg-transparent border-2 border-gray-200 rounded-md p-5 mt-5 md:mt-0">
                    <div className="flex gap-5 ">
                    <Input type="name" placeholder="Name"  className="bg-gray-100"/>
                    <Input type="email" placeholder="Email"  className="bg-gray-100"/>
                    <Input type="phone" placeholder="Phone"  className="bg-gray-100"/>
                    </div>

                    <div className="pt-5 pb-5">
                    <Textarea placeholder="Type your message here." className="bg-gray-100 pt-10 pb-40"/>
                    <Button className="bg-red-500 mt-5">Send Message</Button>
                    </div>
                    </div>

                </div>
            </section>
    </main>
    )
}