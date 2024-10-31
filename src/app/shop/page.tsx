import { Button } from "@/components/ui/button";
import Image from "next/image";
import '@/css/shop.css';

export default function Shop() {
  return (
    <main>
      {/* header section */}
        <section>
         <div className="button-content">
            <Button>Previous</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>Next</Button>
            
         </div>
        </section>
      

         {/* New Arrivals  */}
         <section>
                  <div className="new-arrivals">
                      <h2><b>NEW ARRIVALS</b></h2>
                      <h3><b>PARTY WEAR</b></h3>
                  </div>

                  <div className="Image">
                      <div>
                        <Image src="/p-1.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      <div>  
                        <Image src="/p-2.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div> 

                      <div> 
                        <Image src="/p-3.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      <div>
                        <Image src="/p-2.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      <div>
                        <Image src="/p-5.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      </div>
                      <div className="button">
                      <Button>View All</Button>
                        </div>
                  
              </section>

              {/* Summer  */}
              <section>
                  <div className="summer">
                      <h3><b>SUMMER COLLECTION</b></h3>
                  </div>

                  <div className="summer-Image">
                      <div>
                        <Image src="/s-1.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      <div>  
                        <Image src="/s-2.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div> 

                      <div> 
                        <Image src="/s-3.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      <div>
                        <Image src="/s-4.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      <div >
                        <Image src="/s-5.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>
                      

                      </div>
                      <div className="summer-button">
                      <Button>View All</Button>
                        </div>
                  
              </section>

              {/* Winter  */}
              <section>
                  <div className="winter">
                      <h3><b>WINTER COLLECTION</b></h3>
                  </div>

                  <div className="winter-Image">
                      <div>
                        <Image src="/w-1.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      <div>  
                        <Image src="/w-2.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div> 

                      <div> 
                        <Image src="/w-3.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      <div>
                        <Image src="/w-4.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      <div>
                        <Image src="/w-5.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <Image src="/group-6.png" alt="rating"/>
                      </div>

                      </div>
                      <div className="winter-button">
                      <Button>View All</Button>
                        </div>
                  
              </section>

                {/* Update */}
                <section>
                    <div className="update">
                        <div>
                        <h1><b>STAY UPTO DATE ABOUT OUR LATEST OFFERS</b></h1>
                        </div>

                        <div className="update-button">
                          <Button className="bg-white text-black hover:text-white hover:border-2">Enter your email address</Button>
                          <Button className="bg-white text-black hover:text-white hover:border-2">Subscribe to Newsletter</Button>
                        </div>
                    
                    </div>
                  </section>

           </main>
  );
}
