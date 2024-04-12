import { Wrapper } from './styles'

export function Input() {
    return (
        <>
            <Wrapper>
                <div className="input_group">
                    <label htmlFor="email"></label>
                    <input type="text" name="email" placeholder="Your Email Address" />
                </div>
                <button>Get Started</button>
            </Wrapper>
        </>
    )
}