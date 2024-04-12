import { Header } from "../../components/Header"
import { Section } from '../../components/Section'
import { Hero, Companies, Info } from "./styles"
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
        </>
    )
}