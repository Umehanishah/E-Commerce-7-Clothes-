import Link from 'next/link';
import Image from 'next/image';
import '../css/header.css';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <main>
      {/* Header section */}
      <section className="header">
        <div className="header-content">
                <p>Sign up and get 20% off to your first order: 
                <Link href="/sign.up"> Sign Up Here</Link>
                </p>
        </div>
      </section>

      {/* Navigation bar */}
      <section className='navigation'>
                <div className="logo">
                        <div className="navigation-logo">
                            <h2><Link href="/">SHOP.CO</Link></h2>
                      </div>
                </div>
      
         {/* nav */}
          <div className='navigation-tab'>
            <ul>
             <li><Link href="/shop" className="hover:bg-gray-100 hover:p-5">Shop</Link></li>
             <li><Link href="/sale" className="hover:bg-gray-100 hover:p-5">On Sale</Link></li>
             <li><Link href="/arrivals" className="hover:bg-gray-100 hover:p-5">New Arrivals</Link></li>
             <li><Link href="/brands" className="hover:bg-gray-100 hover:p-5">Brands</Link> </li>
                         
                      </ul>
               </div>

             {/* Search box */}
                  <div className='search-box'>
                      <Button>
                        <Image src="/icon-1.png" alt="search"/>
                        Search...</Button>
                    </div>
            
            {/* icons */}
                <div className='icon'>
                    <Image src="/icon-2.png" alt="search"/>
                    <Image src="/icon-3.png" alt="search"/>
                    </div>

            </section>

    </main>
  );
}
