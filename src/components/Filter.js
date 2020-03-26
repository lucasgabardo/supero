import React from "react";
import { AppContextConsumer } from "../AppContext";
import { Grid, Container, MenuItem, Select} from '@material-ui/core';
import "react-datepicker/dist/react-datepicker.css";
import styled, { css } from 'styled-components'


function Filter() {
    return (
        <AppContextConsumer>
            {context => (               
                <FilterWrapper>
                    <Container maxWidth="md">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FilterBar>
                                    <Title>
                                        <div>
                                            Filtrar ano de publicação
                                        </div>
                                    </Title>
                                    <Dates>
                                        <Select
                                            value={context.filterFrom}
                                            onChange={(e) => context.setFilterFrom(e.target.value)}
                                        >
                                            {context.years.map(year => (
                                                <MenuItem key={year} value={year}>
                                                    {year}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <Ate><div>até</div></Ate>
                                        <Select
                                            value={context.filterTo}
                                            onChange={(e) => context.setFilterTo(e.target.value)}
                                        >
                                            {context.years
                                            .filter((y) => y >= context.filterFrom)
                                            .map(year => (
                                                <MenuItem key={year} value={year}>
                                                    {year}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Dates>

                                    <Results>
                                        <div>{context.filteredBooks.length} resultados encontrados</div>
                                    </Results>
                                </FilterBar>
                            </Grid>
                        </Grid>
                    </Container>
                </FilterWrapper>                   
            )}
        </AppContextConsumer>
    )
}

const VerticalCenter = css`
    position: relative;
    transform: translateY(-50%);
    top: 50%;
`;

const FilterWrapper = styled.div``;

const FilterBar = styled.div`
    display: filter;
`;

const Dates = styled.div`
    display: flex;
    margin: 0 0 0 10px;
`;

const Ate = styled.div`
    ${VerticalCenter}
    margin: 0 10px;

    div{
        ${VerticalCenter};   
    } 
`;

const Results = styled.div`
    margin-left: auto;

    div{
        ${VerticalCenter};   
    }

    @media (max-width: 600px){
        display: none;
    }
`;

const Title = styled.div`
    div{
        ${VerticalCenter};   
    }    
`;

export default Filter;