import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
return (
    <>
    <img className="banner-img" src="https://sgbbm.de/files/SGBBM/SGBBM/Bilder/Frauen%2020-21/10_10_breaking_slider.jpg" alt="breaking" />

<h2>Latest from Around the World</h2>

    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.techfunnel.com/wp-content/uploads/2017/12/7-Types-of-Hackers.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Hackers break into NorthCoders</h3>
      <p>Rumours suggest an artificial badger was responsible</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.dailymail.co.uk/1s/2022/06/15/16/59069051-0-image-a-116_1655308502575.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Liverpool sign Darwin Nunez from Benfica</h3>
      <p>With a fee believed to be in the region of £64m</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://c.files.bbci.co.uk/90B5/production/_104154073_gettyimages-154948449.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Llama antibodies ‘among most effective’ Covid neutralising agents, PHE says</h3>
      <p>Early research shows tiny antibodies can offset both original Covid variants as well as Alpha and Beta variants too</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    </>
)
}

export default Home;