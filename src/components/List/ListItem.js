import React, {useState} from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TableCell, Button, TableRow, Popover } from '@material-ui/core';
import styled from 'styled-components';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
}))(TableRow);

const useStyles = makeStyles(theme => ({
    button: {
      textTransform: 'capitalize',
      textDecoration: 'underline'
    }
}));

function Header(props) {
    const classes = useStyles();
    const book = props.book;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledTableRow key={book.titulo}>
            <StyledTableCell component="th" scope="row">
                {book.titulo}
                <Isbn>({book.isbn})</Isbn>
            </StyledTableCell>
            <StyledTableCell align="right">{book.autor}</StyledTableCell>
            <StyledTableCell align="right">{book.categoria}</StyledTableCell>
            <StyledTableCell align="right">{book.ano}</StyledTableCell>
            <StyledTableCell align="right">
                <Button onClick={handleClick} className={classes.button}>
                    Detalhes
                </Button>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Details>
                        <DetailsTitle>Detalhes</DetailsTitle>
                        <DetailsItem>
                            <strong>Idioma:</strong> {book.idioma}
                        </DetailsItem>
                        <DetailsItem>
                            <strong>Peso:</strong> {book.peso}
                        </DetailsItem>
                        <DetailsItem>
                            <strong>Dimensões:</strong> {book.dimensoes}
                        </DetailsItem>
                    </Details>
                </Popover>
            </StyledTableCell>
        </StyledTableRow>             
    )
}

const Isbn = styled.div`
    font-size: 12px;
`;

const Details = styled.div`
    font-size: 13px;
`;

const DetailsItem = styled.div`
    font-size: 13px;
    padding: 4px 6px;
    font-size: 12px;
`;

const DetailsTitle = styled.div`
    font-size: 15px;
    padding: 6px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 14px;
`;

export default Header;