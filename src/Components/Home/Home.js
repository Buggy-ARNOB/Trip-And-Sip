import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
function Home() {
    return (
        <Carousel className='mt-5'>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                <img
                    className="d-block w-100 carImg"
                    src="https://asansol.org/wp-content/uploads/2021/01/best-hillstation-to-near-as.gif"
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>

                <img
                    className="d-block w-100 carImg"
                    src="https://media.architecturaldigest.com/photos/5ef5f6b4e5c8c1d259c3b00b/master/pass/GettyImages-803432314.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>

                <img
                    className="d-block w-100 carImg"
                    src="https://media.cntraveler.com/photos/598339c5d8b70e58cdb15f17/master/w_3149,h_2362,c_limit/Great_Wall_GettyImages-535657741.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;