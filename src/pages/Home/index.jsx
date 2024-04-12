import { Header } from "../../components/Header"
import { Section } from '../../components/Section'
import { Hero } from "./styles"
import { Input } from "../../components/Input"
import group_people from '../../assets/group-people.svg'

export function Home() {
    return (
        <>
            <Header />
            <Section>
                <Hero>
                    <div className="right-area">
                        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                        <Input/>
                        <div className="request-acess">
                            <img src={group_people} alt="users" className="group-people" />
                            <p>1,600 people requested access a visit in last 24 hours</p>
                        </div>
                    </div>
                    <div className="left-area"> 
                    </div>
                </Hero>
            </Section>
        </>
    )
}