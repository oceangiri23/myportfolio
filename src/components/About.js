import { Container, Row, Col } from "react-bootstrap";
import aboutimg from "../assets/img/aboutphoto.png";

export const About = () =>{

    return (
<section>
    <Container className="about-tab" >
        <Row>
            <h2>About</h2>
        </Row>
        <Row className="about-img-text" >
            <Col className="about_img"  >
            <img  src={aboutimg}/>
            </Col>

            <Col>

            <div className="about-text"> 
                <h3>Computer Engineering Student</h3>
                <table className="about-table">
                <tr >
                        <th>
                        <span>Name: </span>
                        <span> Sagar Giri</span>
                        </th>

                        <th>
                        <span>Address: </span>
                        <span> Tilottame-1, Rupandehi</span>
                        </th>
                </tr>

                <tr>
                        <th>
                        <span>Degree:</span>
                        <span> Bachelor</span>
                        </th>

                        <th>
                        <span> Affiliations:</span>
                        <span>Pulchowk Engineering College</span>
                        </th>
                </tr>

                <tr>
                        <th>
                        <span>Contact: </span>
                        <span> +977-9841615449</span>
                        </th>

                        <th>
                        <span>Email </span>
                        <span>oceangiri5656@gmail.com</span>
                        </th>
                </tr>


                <tr>
                        <th>
                        <span>Hobby: </span>
                        <span> Travelling, Adventure</span>
                        </th>
                        
                        <th>
                        <span>Favorite Cartoon: </span>
                        <span>Ninja Hattori</span>
                        </th>
                </tr>
                </table>
            </div>

            <div>

            </div>
            </Col>
        </Row>
    </Container>
</section>
    )
}
