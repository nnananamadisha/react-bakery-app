import {Fade} from 'react-reveal'

const orderNow = () => {
  window.scrollTo({
  top: 1150,
  behavior: 'smooth'
  })

  
}

const Hero = () => {
    return <section
    className="hero section"
    id="home"
    style={{ backgroundImage: 'url(./media/bakery-app-background.jpg)' }} >
        <Fade top>
    <h1 className="hero__title">
       BEGIN YOUR DAY<br />
       WITH YOUR FAVOURITE PASTRIES<br />
      AND A COZY BAKERY ATMOSPHERE.
    </h1>
    <button className="hero__button" onClick={orderNow}>
      Order Now</button>
      </Fade>
  </section>
};

export default Hero
