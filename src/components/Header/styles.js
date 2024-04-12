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
     &:hover{
        background-color:  ${({ theme }) => theme.COLORS.TEXT_MENU}; 
        color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_MENU};
     }
`