import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"


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
                <BreadcrumbLink href="/product" className="text-black">Product</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/cart" className="text-black">View Cart</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/Contact" className="text-black font-bold">ChackOut</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

        </div>
    </section>

    {/*2nd section */}
            <section className="mx-5 md:mx-10 lg:mx-14">
                <div className="md:flex gap-5 justify-between">
                    
                    <div className="pt-5 pb-20">
                    <h2 className="text-2xl font-semibold pb-5">Billing Details</h2>
                    
                    <div className="pt-5">
                    <p className="pb-3 text-gray-500">First Name <span className="text-red-500">*</span></p>
                    <Input type="first name" placeholder=""  className="bg-gray-100 px-20"/>
                    </div>

                    <div className="pt-5">
                    <p className="pb-3 text-gray-500">Company Name <span className="text-red-500">*</span></p>
                    <Input type="company name" placeholder=""  className="bg-gray-100 px-20"/>
                    </div>

                    <div className="pt-5">
                    <p className="pb-3 text-gray-500">Street Address <span className="text-red-500">*</span></p>
                    <Input type="address" placeholder=""  className="bg-gray-100 px-20"/>
                    </div>

                    <div className="pt-5">
                    <p className="pb-3 text-gray-500">Apartment, floor, etc. (optional)</p>
                    <Input type="apartment" placeholder=""  className="bg-gray-100 px-20"/>
                    </div>

                    <div className="pt-5">
                    <p className="pb-3 text-gray-500">Town/City<span className="text-red-500">*</span></p>
                    <Input type="town" placeholder=""  className="bg-gray-100 px-20"/>
                    </div>

                    <div className="pt-5">
                    <p className="pb-3 text-gray-500">Phone Number <span className="text-red-500">*</span></p>
                    <Input type="phone" placeholder=""  className="bg-gray-100 px-20"/>
                    </div>

                    <div className="pt-5">
                    <p className="pb-3 text-gray-500">Email Address <span className="text-red-500">*</span></p>
                    <Input type="email" placeholder=""  className="bg-gray-100 px-20"/>
                    </div>

                    <div className="flex items-center space-x-2 pt-10">
                        <Checkbox id="terms"/>
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Save this information for faster check-out next time
                        </label>
                        </div>

                    </div>
                

                <div className="pr-40 md:pt-32">
                 <div className="flex gap-10">
                    <Image src="/img-2.jpg" alt="img" width={100} height={100}/>
                    <p>LCD Monitor <span className="pl-40">$650</span></p>
                 </div>

                 <div className="flex gap-10 pt-10">
                    <Image src="/img-3.jpg" alt="img" width={100} height={100}/>
                    <p>LCD Monitor <span className="pl-40">$1150</span></p>
                 </div>

                 <div className="pt-10">
                    <p className="pt-2 pb-5">Subtotal: <span className="pl-80">$1750</span></p>
                    <hr/>
                    <p className="pt-5 pb-5">Shipping: <span className="pl-80">Free</span></p>
                    <hr/>
                    <p className="pt-5 pb-5">Total: <span className="pl-80"> $1750</span></p>
                    
                    <div className="flex gap-5 pt-10">
                    <Input type="coupon" placeholder="Coupon Code"  className="bg-gray-100"/>
                    <Button className="bg-red-500 text-white hover:bg-transparent hover:text-black">Apply Coupon</Button>
                    </div>
                    <Button className="bg-red-500 text-white hover:bg-transparent hover:text-black mt-5 px-5 mb-5 md:mb-0">Place Order</Button>
                    
                 </div>

                 </div>

                </div>
            </section>
    </main>
    )
}