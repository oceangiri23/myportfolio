import {Container, Tab, Col, Row, Nav} from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';


export const Projects = () =>{

    const projects = [
        {
        title:"Business startup",
        description : "Design and Development",
        imgUrl: projImg1,
        Url:"https://github.com/oceangiri23/Game-PONG",
    },

    {
        title:"Business startup",
        description : "Design and Development",
        imgUrl: projImg2,
        Url:"https://github.com/oceangiri23/Game-PONG",
    },

    {
        title:"Business startup",
        description : "Design and Development",
        imgUrl: projImg3,
        Url:"https://github.com/oceangiri23/Game-PONG",
    },

    // {
    //     title:"Business startup",
    //     description : "Design and Development",
    //     imgUrl: projImg1,
    // },

    // {
    //     title:"Business startup",
    //     description : "Design and Development",
    //     imgUrl: projImg2,
    // },

    // {
    //     title:"Business startup",
    //     description : "Design and Development",
    //     imgUrl: projImg3,
    // },
    ];


    return (

        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2> Projects</h2>
                   
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptas at mollitia
                         labore quae accusantium quis, quasi doloribus nostrum animi quo perferendis ipsum temporibus, sit consequuntur laudantium iusto inventore? Sint.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                    <Col>              
                    <Nav.Item><Nav.Link eventKey="first">Tab One</Nav.Link> </Nav.Item>
                    </Col>
                    <Col>
                     <Nav.Item><Nav.Link eventKey="second">Tab two</Nav.Link></Nav.Item>
                     </Col>
                     <Col>
                    <Nav.Item> <Nav.Link eventKey="third" >Tab Three</Nav.Link></Nav.Item>
                    </Col>
                    </Nav>
                    <Tab.Content className='projectcards'>
                        <Tab.Pane eventKey='first'>
                            <Row >
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index} {...project} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>Loren Ipsum</Tab.Pane>
                        <Tab.Pane eventKey='third'>Loren Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className='background-image-right' src={colorSharp2}></img> */}
        </section>

    );
}