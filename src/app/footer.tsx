import { Input } from "@/components/ui/input";
import Link from "next/link";


export default function Header() {
    return ( 
        <section className="bg-black">
            <div className="mx-5 md:mx-10 lg:mx-14 pt-14 pb-10">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 text-center sm:text-left">
                    <div className="text-white">
                        <h1 className="text-xl md:text-2xl font-bold">Exclusive</h1>
                        <h2 className="pt-3 text-xs">Subscribe</h2>
                        <p className="pt-3 text-xs">Get 10% off your first order</p>
                        <div className="flex gap-3 items-center pt-7 justify-center sm:justify-normal">
                            <Input type="email" placeholder="Email" className="max-w-60 bg-transparent"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
                        </div>
                    </div>

                    <div className="text-white">
                        <ul>
                        <li className="text-lg font-semibold">Support</li>
                        <li className="pt-3 text-xs">111 Bijoy sanani, Dhaka, DH 1515, Bangladesh.</li>
                        <li className="pt-3 text-xs">exclusive@gmail.com</li>
                        <li className="pt-3 text-xs">+88015-88888-99999</li>
                        </ul>
                    </div>

                    <div className="text-white">
                        <ul>
                        <li className="text-lg font-semibold">Account</li>
                        <li className="pt-3 text-xs">
                            <Link href="/account">
                            My Account</Link></li>
                        <li className="pt-3 text-xs">
                        <Link href="/login">Login / Register</Link></li>
                        <li className="pt-3 text-xs">
                        <Link href="/cart">Cart</Link></li>
                        <li className="pt-3 text-xs">
                        <Link href="/wishlist">Wishlist</Link></li>
                        <li className="pt-3 text-xs">
                        <Link href="/shop">Shop</Link></li>
                        </ul>
                    </div>

                    <div className="text-white">
                        <ul>
                        <li className="text-lg font-semibold">Quick Link</li>
                        <li className="pt-3 text-xs">Privacy Policy</li>
                        <li className="pt-3 text-xs">Terms Of Use</li>
                        <li className="pt-3 text-xs">FAQ</li>
                        <li className="pt-3 text-xs">Contact</li>
                        </ul>
                    </div>

                    <div className="text-white">
                        <ul>
                        <li className="text-lg font-semibold">Download App</li>
                        <li className="pt-3 text-gray-400 text-sm">Save $3 with App New User Only</li>
                        <li className="pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-qr-code"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
                        </li>
                        <li className="flex gap-5 pt-3 pb-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        </li>
                        </ul>
                    </div>
                </div>
                <hr/>

                <div>
                    <p className="text-gray-500 pt-5 pb-5 text-center">@Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </section>
    );
}