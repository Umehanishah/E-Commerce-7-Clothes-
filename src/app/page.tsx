import { Button } from "@/components/ui/button";

import '../css/page.css';

export default function Home() {
  return (
    <main>
      {/* header section */}
        <section>
          <div className="display">
            <div className="display-view">
              <div className="display-content">
               <h1><b>FIND CLOTHES THAT MATCHES YOUR STYLE</b></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quasi vitae ratione culpa assumenda fuga recusandae mollitia tempora consequuntur voluptatibus fugit laudantium ad, eos maiores! Quod dolor perspiciatis saepe asperiores?</p>
                <Button>Shop Now</Button>
                </div>
                <div className="display-tag">
                <p><b>200+ </b><br/>
                <span>International Brands</span></p>
                
                <p><b>2000+ </b><br/>
                <span>High Quality Products</span></p>

                <p><b>3000+ </b><br/>
                <span>Happy Customers</span></p>
                </div>

              </div>

              <div>
                <img src="/img-1.png" alt="couple"/>
              </div>
          </div>
        </section>
      

      {/* advertisment */}
          <section>
            <div className="ads">
              <img src="/group-1.png" alt="brands"/>
              <img src="/group-2.png" alt="brands"/>
              <img src="/group-3.png" alt="brands"/>
              <img src="/group-4.png" alt="brands"/>
              <img src="/group-5.png" alt="brands"/>
            </div>
          </section>

          {/* New Arrivals  */}
              <section>
                  <div className="new-arrivals">
                      <h2><b>NEW ARRIVALS</b></h2>
                      <h3><b>PARTY WEAR</b></h3>
                  </div>

                  <div className="img">
                      <div>
                        <img src="/p-1.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div>

                      <div>  
                        <img src="/p-2.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div> 

                      <div> 
                        <img src="/p-3.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div>

                      <div>
                        <img src="/p-2.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div>

                      <div>
                        <img src="/p-5.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
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

                  <div className="summer-img">
                      <div>
                        <img src="/s-1.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div>

                      <div>  
                        <img src="/s-2.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div> 

                      <div> 
                        <img src="/s-3.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div>

                      <div>
                        <img src="/s-4.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div>

                      <div >
                        <img src="/s-5.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
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

                  <div className="winter-img">
                      <div>
                        <img src="/w-1.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div>

                      <div>  
                        <img src="/w-2.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div> 

                      <div> 
                        <img src="/w-3.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div>

                      <div>
                        <img src="/w-4.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div>

                      <div>
                        <img src="/w-5.jpg" alt="clothes"/>
                        <h3>Couple Party Wear</h3>
                        <p>$120</p>
                        <img src="/group-6.png" alt="rating"/>
                      </div>

                      </div>
                      <div className="winter-button">
                      <Button>View All</Button>
                        </div>
                  
              </section>

              {/* Browse */}
                <section>
                    <div className="browse">
                           <h2><b>BROWSE BY DRESS STYLE</b></h2>
                            

                            <div className="browse-img">
                              <div className="img">
                            <img src="/z-1.jpg" alt="rating"/><br/>
                            <img src="/z-2.jpg" alt="rating"/>
                            </div>
                            <div className="img">
                            <img src="/z-3.jpg" alt="rating"/><br/>
                            <img src="/z-4.jpg" alt="rating"/>
                            </div>
                            </div>
                            </div>
                </section>


              {/* Customers */}
                  <section>
                      <div className="customer">
                            <h2><b>OUR HAPPY CUSTOMERS</b></h2>
                            </div>

                          <div className="customer-content">
                          <div className="customer-content-1">
                          <img src="/group-6.png" alt="rating"/>
                          <h3><b>Sarah M.</b></h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius
                             accusantium ad laudantium maxime a laboriosam doloremque repellendus!
                              Ad eligendi architecto a quod culpa. Velit quos magnam possimus beatae fugiat!</p>
                          </div>

                          <div className="customer-content-1">
                          <img src="/group-6.png" alt="rating"/>
                          <h3><b>Sarah M.</b></h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius
                             accusantium ad laudantium maxime a laboriosam doloremque repellendus!
                              Ad eligendi architecto a quod culpa. Velit quos magnam possimus beatae fugiat!</p>
                          </div>

                          <div className="customer-content-1">
                          <img src="/group-6.png" alt="rating"/>
                          <h3><b>Sarah M.</b></h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius
                             accusantium ad laudantium maxime a laboriosam doloremque repellendus!
                              Ad eligendi architecto a quod culpa. Velit quos magnam possimus beatae fugiat!</p>
                          </div>
                         
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
