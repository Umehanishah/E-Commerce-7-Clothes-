import { Button } from "@/components/ui/button";

import '@/css/arrivals.css';

export default function Arrivals() {
  return (
    <main>
      
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
