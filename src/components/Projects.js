import {Container, Tab, Col, Row, Nav} from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import newsroom from '../assets/img/newsroom.png';
import coin from '../assets/img/coin.png';
import projImg3 from '../assets/img/project-img3.png';
import pong from '../assets/img/pong.png';


export const Projects = () =>{

    const projects = [
        {
        title:"The Newsroom",
        description : "The-Newsroom is a news site which uses API to get news data and displays it in interactive manner. It is developed using react framework.",
        imgUrl: newsroom,
        Url:"https://github.com/oceangiri23/The-Newsroom",
    },

    {
        title:"Toss the Coin",
        description : "This is a simple web-based game that allows the user to choose heads or tails and then flips a coin to determine the outcome.",
        imgUrl: coin,
        Url:"https://github.com/oceangiri23/Toss-the-Coin",
    },

   
];

    const projectsgame = [
        {
            title:"Game-Pong",
            description : "This is a simple implementation of the classic Pong game using C programming language and the raylib game development library",
            imgUrl: pong,
            Url:"https://github.com/oceangiri23/Game-PONG",
        }
    ];

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
                    <Nav.Item><Nav.Link eventKey="first">Web Projects</Nav.Link> </Nav.Item>
                    </Col>
                    <Col>
                     <Nav.Item><Nav.Link eventKey="second">Games</Nav.Link></Nav.Item>
                     </Col>
                     <Col>
                    <Nav.Item> <Nav.Link eventKey="third" >Data Science</Nav.Link></Nav.Item>
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
                      
                        <Tab.Pane eventKey='second'>
                        <Row >
                                {
                                    projectsgame.map((projectsgame, index) => {
                                        return (
                                            <ProjectCard key={index} {...projectsgame} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>


                        <Tab.Pane eventKey='third' className='datascience'>Projects on this topic are yet to come.</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className='background-image-right' src={colorSharp2}></img> */}
        </section>

    );
}