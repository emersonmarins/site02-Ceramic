import { AboutUs } from "./AboutUs/AboutUs.js";
import { CookiePolicy } from "./CookiePolicy/CookiePolicy.js";
import { Orders } from "./Orders/Orders.js";
import { PrivacyPolicy } from "./PrivacyPolicy/PrivacyPolicy.js";
import { RefundPolicy } from "./RefundPolicy/RefundPolicy.js";
import { ShippingPolicy } from "./ShippingPolicy/ShippingPolicy.js";

class MenuFooter {
  constructor(){
    this.aboutUs = new AboutUs();
    this.cookiePolicy = new CookiePolicy(); 
    this.orders = new Orders(); 
    this.privacyPolicy = new PrivacyPolicy(); 
    this.refundPolicy = new RefundPolicy(); 
    this.shippingPolicy = new ShippingPolicy(); 
  };

  get object_aboutUs(){
    return this.aboutUs;
  };

  get object_cookiePolicy(){
    return this.cookiePolicy;
  };

  get object_orders(){
    return this.orders;
  };

  get object_privacyPolicy(){
    return this.privacyPolicy;
  };

  get object_refundPolicy(){
    return this.refundPolicy;
  };

  get object_shippingPolicy(){
    return this.shippingPolicy;
  };

}

export { MenuFooter }
