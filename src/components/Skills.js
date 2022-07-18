import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/java.svg';
import meter2 from '../assets/img/react.svg';
import meter3 from '../assets/img/javascript.svg';
import cImg from '../assets/img/c.svg';
import { CashCoin } from 'react-bootstrap-icons';

export const Skills= () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>I've got a range of skillz just trust me <CashCoin size={25} /></p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={meter1} alt='Image' />
                                <h5>Java Programming</h5>
                            </div>

                            <div className='item'>
                                <img src={meter2} alt='Image' />
                                <h5>React.js</h5>
                            </div>

                            <div className='item'>
                                <img src={meter3} alt='Image' />
                                <h5>Javascript</h5>
                            </div>

                            <div className='item'>
                                <img src={cImg} alt='Image' />
                                <h5>C Programming</h5>
                            </div>

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
           
        </section>
    )
}