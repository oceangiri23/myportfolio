import {Container, Row, Col} from 'react-bootstrap';
import {projImg1} from '../assets/img/project-img1.png';
import {projImg2} from '../assets/img/project-img2.png';
import {projImg3} from '../assets/img/project-img3.png';
export const Projects = () =>{

    const projects = [
        {
        title:"Business startup",
        description : "Design and Development",
        imgUrl: projImg1,
    },

    {
        title:"Business startup",
        description : "Design and Development",
        imgUrl: projImg2,
    },

    {
        title:"Business startup",
        description : "Design and Development",
        imgUrl: projImg3,
    },

    {
        title:"Business startup",
        description : "Design and Development",
        imgUrl: projImg1,
    },

    {
        title:"Business startup",
        description : "Design and Development",
        imgUrl: projImg2,
    },

    {
        title:"Business startup",
        description : "Design and Development",
        imgUrl: projImg3,
    },
    ];


    return (

        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2> Projects</h2>
                   
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptas at mollitia labore quae accusantium quis, quasi doloribus nostrum animi quo perferendis ipsum temporibus, sit consequuntur laudantium iusto inventore? Sint.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">

                    <Nav.Item><Nav.Link eventKey="first">Tab One</Nav.Link> </Nav.Item>

                     <Nav.Item><Nav.Link eventKey="second">Tab two</Nav.Link></Nav.Item>

                    <Nav.Item> <Nav.Link eventKey="third" >Tab Three</Nav.Link></Nav.Item>

                    </Nav>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>

    );
}