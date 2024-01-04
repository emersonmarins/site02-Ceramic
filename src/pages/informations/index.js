import { AboutUs } from "./aboutUs/AboutUs.js";
import { CookiePolicy } from "./cookiePolicy/CookiePolicy.js";
import { Orders } from "./orders/Orders.js";
import { PrivacyPolicy } from "./privacyPolicy/PrivacyPolicy.js";
import { RefundPolicy } from "./refundPolicy/RefundPolicy.js";
import { ShippingPolicy } from "./shippingPolicy/ShippingPolicy.js";

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
