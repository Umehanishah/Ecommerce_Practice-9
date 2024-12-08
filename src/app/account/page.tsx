
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Input } from "@/components/ui/input"
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
                <BreadcrumbLink href="/account" className="text-black font-bold">My Account</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

        </div>
    </section>

    {/*2nd section */}
            <section className="mx-5 md:mx-10 lg:mx-14">
                <div className="md:flex gap-10 pt-5 pb-10">
                    <div className="pb-5 md:pb-0">
                        <h2 className="flex gap-5 text-base font-semibold items-center">
                          Manage My Account</h2>
                        <ul>
                        <li className="pt-5 pl-5 hover:text-red-500">My Profile</li>
                        <li className="pt-3 pl-5 hover:text-red-500">Address Book</li>
                        <li className="pt-3 pl-5 pb-5 hover:text-red-500">My Payment Options</li>
                        </ul>
                        <h2 className="flex gap-5 text-base font-semibold items-center">
                          My Orders</h2>
                        <ul>
                        <li className="pt-5 pl-5 hover:text-red-500">My Returns</li>
                        <li className="pt-3 pl-5 hover:text-red-500">My Cancellations</li>
                        </ul>

                        <ul>
                            
                        <h2 className="flex gap-5 pt-5 text-base font-semibold items-center hover:text-red-500">
                          <Link href="/wishlist">
                          My WishList</Link></h2>
                        </ul>
                    </div>
                    <div>

                    </div>

                    <div className="bg-transparent border-2 border-gray-200 rounded-md p-10">
                    <h2 className="text-red-500 pb-5 font-semibold">Edit Your Profile</h2>
                    <div className="flex gap-5 ">
                     <div>
                            <p className="text-sm pb-3">First Name</p>   
                            <Input type="name" placeholder="Umehani"  className="bg-gray-100 pr-40"/>
                            </div>
                            <div>
                            <p className="text-sm pb-3">Last Name</p>
                            <Input type="last-name" placeholder="Umer Farooq"  className="bg-gray-100 pr-40"/>
                            </div>
                    </div>

                    <div className="flex gap-5 ">
                            <div>
                            <p className="text-sm pb-3 pt-5">Email</p>   
                            <Input type="email" placeholder="missumehani@gmail.com" className="bg-gray-100 pr-40"/>
                            </div>
                            <div>
                            <p className="text-sm pb-3 pt-5">Address</p>
                            <Input type="address" placeholder="Abc appartment..."  className="bg-gray-100 pr-40"/>
                            </div>
                    </div>

                    <div>
                    <p className="text-sm pb-3 pt-5">Password Changes</p>
                    <Input type="current password" placeholder="Current Password"  className="bg-gray-100"/>
                    <Input type="new password" placeholder="New Password"  className="bg-gray-100 mt-5"/>
                    <Input type="confirm password" placeholder="Confirm New Password"  className="bg-gray-100 mt-5"/>
                    </div>
                    
                    <div>
                    <Button className="mt-5 mr-5 bg-transparent text-black hover:text-white">Cancel</Button>
                    <Button className="bg-red-500 mt-5">Send Message</Button>
                    </div>
                    </div>
                    

                </div>
            </section>
    </main>
    )
}