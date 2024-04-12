import styled from 'styled-components' 

export const Container = styled.header` 
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6.9rem;
    max-width: 117rem;
    padding: 0 1.5rem;
    margin: 5.5rem auto 0;
    >img{
        max-width: 6.2rem;
        width: 100%;
    }
    @media (max-width:1024px){
        justify-content: space-between;
        margin-top: 2rem;
     }
`

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
     >ul{
        display: flex;
        gap: 5.4rem;  
     }
     a{
        color: ${({ theme }) => theme.COLORS.TEXT_MENU}; 
        font-size: 1.8rem; 
        font-weight: 500; 
        transition: filter .3s;
        &:hover{
            filter: brightness(0.8);
        }
     } 
     >div{
        display: flex;
        gap: 2.6rem;
        align-items: center;
     } 
     @media (max-width:1024px){
        display: none;
     }
`

export const Button = styled.button`
     padding: 1.7rem 0;
     color: ${({ theme }) => theme.COLORS.TEXT_MENU}; 
     font-size: 1.8rem; 
     font-weight: 500; 
     text-align: center;
     background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_MENU};
     width: 15.2rem;
     transition: all .3s;
     border-radius: 5px;
     &:hover{
        background-color:  ${({ theme }) => theme.COLORS.TEXT_MENU}; 
        color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_MENU};
     } 
`

export const ButtonMobile = styled.button`
    display: none;
    >svg{
        color: #FFF;
        font-size: 5rem;
    }
    @media (max-width:1024px){
        display: block;
     }
`

export const Mobile = styled.div` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    opacity: 0;
    pointer-events: none;
    transition: opacity .3s;
    
    >.overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 0;
    }
    >aside{
        position: fixed;
        top: 0;
        left: 0;
        width: 75%;
        height: 100%;
        background: ${({ theme }) => theme.COLORS.BACKGROUND}; 
        padding: 3rem;
        transform: translateX(-100%);
        transition: transform .3s;
        >img {
            max-width: 15rem;
            margin-bottom: 4rem;
        }

        ul {
            margin: 2rem 0 0 0;
            li {
                a {
                    padding: 1.5rem 0;
                    display: block;
                    font-size: 1.8rem;
                    color:${({ theme }) => theme.COLORS.TEXT_MENU}; 
                }
                &:nth-of-type(6){
                    margin-bottom: 2rem;
                }
            }
        }

    }
`

export const Blur = styled.div`
  position: absolute; 
  top: 0;
  left: 0;
  z-index: -1;
  width: 68rem;
  height: 70rem;
  @media (max-width:1024px) {
    max-width: 68rem;
    width: 100%;
  }
`;
 

