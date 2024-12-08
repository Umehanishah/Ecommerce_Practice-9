import Image from "next/image";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Card, CardContent } from "@/components/ui/card"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


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
                <BreadcrumbLink href="/about" className="text-black font-bold">About</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>

        </div>
      </section>

      {/*2nd section */}
        <section className="mx-5 md:mx-10 lg:mx-14">
            <div className="md:flex gap-10 pb-10">
                <div>
                <h1 className="text-4xl font-bold md:pt-20">Our Story</h1>
                <p className="pt-5 text-sm text-justify leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati minima eaque pariatur aliquid a voluptatem magni iste aliquam, iure ab doloribus? Tempore blanditiis rem ratione animi architecto accusamus enim nisi!. <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet porro neque architecto, ea dicta vero sint, itaque ad incidunt libero quisquam error enim fugiat perspiciatis fuga eveniet. Alias, nam?
                <br/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo porro officia, veritatis, cumque iure molestiae nesciunt fugit delectus reiciendis non quaerat itaque aliquam est totam. Fugit labore repellendus at deserunt!
                </p>
                </div>

                <div className="pt-5 sm:pt-0">
                    <Image src="/img-11.png" alt="img" width={1400} height={1000}/>
                </div>
            </div>
        </section>

        {/*2nd section */}
        <section className="mx-5 md:mx-10 lg:mx-14">
            <div className="pt-10">
                <div className="hidden md:block">
                  <div className="md:grid grid-cols-4 gap-5 pb-10">
                    <div className="border-2 border-gray-200 bg-transparent hover:bg-red-500 rounded-sm text-center items-center p-5">
                        <Image src="/icon-11.png" alt="icon" width={80} height={80} className="bg-black rounded-full border-8 border-gray-300 p-2 lg:mx-20"/>
                        <h2 className="text-xl font-bold pt-5">10.5K</h2>
                        <p className="text-sm">Sallers active our site</p>
                    </div>

                    <div className="bg-transparent hover:bg-red-500 border-2 border-gray-200 rounded-sm text-center items-center p-5">
                        <Image src="/icon-12.png" alt="icon" width={80} height={80} className="bg-white rounded-full border-8 border-gray-300 p-2 lg:mx-20"/>
                        <h2 className="text-xl font-bold pt-5">33K</h2>
                        <p className="text-sm">Sallers active our site</p>
                    </div>

                    <div className="border-2 border-gray-200 bg-transparent hover:bg-red-500 rounded-sm text-center items-center p-5">
                        <Image src="/icon-13.png" alt="icon" width={80} height={80} className="bg-black rounded-full border-8 border-gray-300 p-2 lg:mx-20"/>
                        <h2 className="text-xl font-bold pt-5">45.5K</h2>
                        <p className="text-sm">Sallers active our site</p>
                    </div>

                    <div className="border-2 border-gray-200 bg-transparent hover:bg-red-500 rounded-sm text-center items-center p-5">
                        <Image src="/icon-14.png" alt="icon" width={80} height={80} className="bg-black rounded-full border-8 border-gray-300 p-2 lg:mx-20"/>
                        <h2 className="text-xl font-bold pt-5">25K</h2>
                        <p className="text-sm">Sallers active our site</p>
                    </div>
                </div>


                <div className="block md:hidden mx-14 pt-10 pb-5">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className=":xs:basis-1/1 sm:basis-1/2 md:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex p-2 justify-center border-2 bg-red-500">
                      <Image 
                        src={`/icon-${index + 11}.png`} 
                        alt={`icon ${index + 1}`} 
                        width={100} 
                        height={50} 
                        
                      />  
                    </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </div>
    </div>
            </div>
        </section>

        {/*3rd section */}
        <section className="mx-5 md:mx-10 lg:mx-14">
            <div className="sm:grid grid-cols-3 gap-10 pt-10 pb-10 px-20 sm:px-0">
                <div>
                <Image src="/img-12.png" alt="icon" width={300} height={80}/>
                        <h2 className="text-xl font-semibold pt-5">Tom Cruise</h2>
                        <p className="text-sm">Founder & Chairman</p>
                        <p className="flex gap-5 pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </p>
                </div>

                <div className="pt-10 sm:pt-0">
                <Image src="/img-13.png" alt="icon" width={300} height={80}/>
                        <h2 className="text-xl font-semibold pt-5">Tom Cruise</h2>
                        <p className="text-sm">Founder & Chairman</p>
                        <p className="flex gap-5 pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </p>
                </div>

                <div className="pt-10 sm:pt-0">
                <Image src="/img-14.png" alt="icon" width={300} height={80}/>
                        <h2 className="text-xl font-semibold pt-5">Tom Cruise</h2>
                        <p className="text-sm">Founder & Chairman</p>
                        <p className="flex gap-5 pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </p>
                </div>
            </div>
        </section>


{/*4th section */}
        <section className="mx-5 md:mx-10 lg:mx-14 pt-10 pb-20">
              <div className="md:grid grid-cols-3 gap-5 place-items-center">
                <div className="text-center pt-5">
                <Image src="/icon-8.png" alt="img" width={100} height={100} className="bg-black border-8 border-gray-400 rounded-full p-2 ml-14 mb-5"/>
                <h2 className="font-bold text-sm lg:text-base">FREE AND FAST DELIVERY</h2>
                <p className="text-xs md:text-sm">Free delivery for all orders over $140</p>
                </div>

                <div className="text-center pt-5">
                <Image src="/icon-9.png" alt="img" width={100} height={100} className="bg-black border-8 border-gray-400 rounded-full p-2 ml-14 mb-5"/>
                <h2 className="font-bold text-sm lg:text-base">FREE AND FAST DELIVERY</h2>
                <p className="text-xs md:text-sm">Free delivery for all orders over $140</p>
                </div>

                <div className="text-center pt-5">
                <Image src="/icon-10.png" alt="img" width={100} height={100} className="bg-black border-8 border-gray-400 rounded-full p-2 ml-14 mb-5"/>
                <h2 className="font-bold text-sm lg:text-base">FREE AND FAST DELIVERY</h2>
                <p className="text-xs md:text-sm">Free delivery for all orders over $140</p>
                </div>
              </div>
            </section>
      </main>
    )
}