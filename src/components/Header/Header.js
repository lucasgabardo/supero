import React, {useState} from "react";
import { AppContextConsumer } from "../../AppContext";
import { Grid, TextField, Button, Container } from '@material-ui/core';
import styled, { css } from 'styled-components'

function Header() {
    const [searchValue, setSearchValue] = useState('');
    
    return (
        <AppContextConsumer>
            {context => { 
                const handleSubmit = (e) => {
                    e.preventDefault();
                    context.search(searchValue)
                }

                return(               
                    <HeaderWrapper>
                        <Container maxWidth="md">
                            <form onSubmit={(e) =>  handleSubmit(e)}>
                                <Grid container spacing={2}>
                                    <Grid item sm={3}>
                                        <Logo>
                                            <img alt="Supero" src={require('./logo.svg')}/>
                                        </Logo>
                                    </Grid>
                                    <Grid item sm={7} xs={9}>
                                        <SearchBar>
                                            <TextField 
                                                fullWidth 
                                                variant="outlined"
                                                size="small"
                                                label="Buscar pelo título, autor ou ISBN" 
                                                onChange={(e) => setSearchValue(e.target.value)}
                                            />
                                        </SearchBar>
                                    </Grid>
                                    <Grid item sm={2} xs={3}>
                                        <SearchButton>
                                            <Button 
                                                type="submit"
                                                variant="contained" 
                                                color="primary"
                                                onClick={() =>  context.search(searchValue)}
                                                color="#eb6852">
                                                Buscar
                                            </Button>
                                        </SearchButton>
                                    </Grid>
                                </Grid>
                            </form>
                        </Container>
                    </HeaderWrapper>                   
                )
            }}
        </AppContextConsumer>
    )
}

const VerticalCenter = css`
    position: relative;
    transform: translateY(-50%);
    top: 50%;
`;

const HeaderWrapper = styled.header`
    margin-top: 10px;
`;

const Logo = styled.div`
    img{
        display: block;
        width: 100%;
    }
`;

const SearchBar = styled.div`
    ${VerticalCenter};
`;

const SearchButton = styled.div`
    position: relative;
    max-width: 100%;

    @media(min-width: 600px){
        transform: translateY(-50%);
        top: calc(50% - 2px);
        text-align: center;
    }    

    button{
        background-color: #eb6852 !important;
        color: #fff !important;

        &:hover{
            filter: brightness(.9);
        }
    }
`;

export default Header;