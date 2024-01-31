

const Footer = () =>{
   return  <footer class="footer">
   <div className="footer__container container">
     <h1 className="footer__title">Bakery<span>.</span>co</h1>
     <p class="footer__description">
       The best place to work <br />
       and be more productive.
     </p>

     <div className="footer__content grid">
       <div className="footer__data">
         <h2 className="footer__subtitle">Address</h2>
         <p className="footer__information">
           Street no.19 Capetown<br />
           Joubert Park. 003
         </p>
       </div>
       <div className="footer__data">
         <h2 className="footer__subtitle">Contact</h2>
         <p className="footer__information">
           +277654321 <br />
           bakery@email.com
         </p>
       </div>
       <div className="footer__data">
         <h2 className="footer__subtitle">Office</h2>
         <p className="footer__information">
           Monday - Saturday <br />
           9AM - 10PM
         </p>
       </div>
       <div className="footer__data">
         <p className="footer__newsletter-description">
           Subscribe to our newsletter
         </p>

         <div className="footer__newsletter">
           <input
             type="email"
             placeholder="Your email address"
             className="footer__input"
           />
           <button className="footer__button">
             <i className="bx bx-right-arrow-alt"></i>
           </button>
         </div>
       </div>
     </div>

     <div className="footer__group">
       <ul className="footer__social">
         <a href="#facebook" target="_blank" classn="footer__social-link">
           <i className="bx bxl-facebook"></i>
         </a>
         <a href="#instagram" target="_blank" className="footer__social-link">
           <i className="bx bxl-instagram"></i>
         </a>
         <a href="#tikto" target="_blank" className="footer__social-link">
           <i className="bx bxl-tiktok"></i>
         </a>
       </ul>

       <span className="footer__copy"> &#134; nnanana madisha. All rigths reserved </span>
     </div>
   </div>
 </footer>

}

export default Footer;