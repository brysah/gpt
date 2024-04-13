import { Header } from "../../components/Header"
import { Section } from '../../components/Section'
import { Hero, Companies, Info, Future } from "./styles"
import { Input } from "../../components/Input"
import group_people from '../../assets/group-people.svg'
import { company, company2, company3, company4, company5 } from '../../utils/companies'
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <>
            <Header />
            <Section>
                <Hero>
                    <div className="right-area">
                        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                        <Input />
                        <div className="request-acess">
                            <img src={group_people} alt="users" className="group-people" />
                            <p>1,600 people requested access a visit in last 24 hours</p>
                        </div>
                    </div>
                    <div className="left-area">
                    </div>
                </Hero>
            </Section>
            <Section>
                <Companies>
                    <img src={company} alt="logo google" />
                    <img src={company2} alt="logo slack" />
                    <img src={company3} alt="logo atlassian" />
                    <img src={company4} alt="logo dropbox" />
                    <img src={company5} alt="logo shopify" />
                </Companies>
            </Section>
            <Section>
                <Info>
                    <div className="top">
                        <div className="title">
                            <div className="line"></div>
                            <h3>What is GPT-3</h3>
                        </div>
                        <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                    </div>
                    <div className="content">
                        <div className="explore">
                            <h4>The possibilities are beyond your imagination</h4>

                            <Link>Explore The Library </Link>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="title">
                                    <div className="line"></div>
                                    <h3>Chatbots</h3>
                                </div>
                                <p>
                                    We so opinion friends me message as delight. Whole front do of plate heard oh ought.
                                </p>
                            </div>
                            <div className="card">
                                <div className="title">
                                    <div className="line"></div>
                                    <h3>Knowledgebase</h3>
                                </div>
                                <p>
                                    At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                                </p>
                            </div>
                            <div className="card">
                                <div className="title">
                                    <div className="line"></div>
                                    <h3>Education</h3>
                                </div>
                                <p>
                                    At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
                                </p>
                            </div>
                        </div>
                    </div>
                </Info>
            </Section>
            <Section>
                <Future>
                    <div className="acess">
                        <div className="explore">
                            <h4>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h4>
                            <Link>Request Early Access to Get Started</Link>
                        </div>
                    </div>
                    <div className="improve">
                        <div className="item">
                            <div className="title">
                                <div className="line"></div>
                                <h3>Improving end distrusts instantly </h3>
                            </div>
                            <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <div className="line"></div>
                                <h3>Become the tended active</h3>
                            </div>
                            <p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <div className="line"></div>
                                <h3>Message or am nothing</h3>
                            </div>
                            <p>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
                        </div>
                        <div className="item">
                            <div className="title">
                                <div className="line"></div>
                                <h3>Really boy law county</h3>
                            </div>
                            <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
                        </div>
                    </div>
                </Future>
            </Section>
        </>
    )
}