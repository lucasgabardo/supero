import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { AppContextConsumer } from "../../AppContext";
import { Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import ListItem from './ListItem';
import Pagination from '@material-ui/lab/Pagination';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: '#3e3935',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


function List() {
    return (
        <AppContextConsumer>
            {context => {
                const counter = Math.round(context.filteredBooks.length / 10);

                return(
                    <Container maxWidth="md">
                        <Grid container spacing={3}>   
                            <Grid item xs={12}>
                                <TableContainer component={Paper}>
                                    <Table aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                            <StyledTableCell>Livro</StyledTableCell>
                                            <StyledTableCell align="right">Autor</StyledTableCell>
                                            <StyledTableCell align="right">Categoria</StyledTableCell>
                                            <StyledTableCell align="right">Ano</StyledTableCell>
                                            <StyledTableCell align="right">Ações</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {context.filteredBooks
                                            .filter((b, i) => i >= context.rangeStart && i <= context.rangeEnd)
                                            .map(book => (
                                                <ListItem book={book} key={book.titulo}/>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>                             
                                
                                <Pages>
                                    <Pagination  count={counter === 0 ? 1 : counter} size="small" onChange={(e, page) => context.changePage(page)}/>
                                </Pages>
                            </Grid>
                        </Grid>
                    </Container>     
                )
            }}
        </AppContextConsumer>
    )
}

const Pages = styled.div`
    text-align: center;
    margin: 10px auto 0 auto;

    ul{
        justify-content: center;
    }
`;

export default List;