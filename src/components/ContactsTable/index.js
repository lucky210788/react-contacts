import React from 'react';
import {format} from 'date-fns'
import {
    Avatar,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import CopyElement from "../CopyElement";
import {NATIONALITIES_HUMAN_NAME} from "../../constans/nationality"

const ContactsTable = ({data}) => {
    return (
        <TableContainer component={Paper}  data-testid="contacts-table-container" >
            <Table aria-label="contacts table">
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell align="center">Fullname</TableCell>
                        <TableCell align="left">Birthday</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Phone</TableCell>
                        <TableCell align="left">Location</TableCell>
                        <TableCell align="right">Nationality</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(contact => (
                        <TableRow
                            key={contact.login.uuid}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="center">
                                <Avatar alt={contact.name.first} src={contact.picture.thumbnail}/>
                            </TableCell>
                            <TableCell align="left">
                                <Typography
                                    sx={{fontSize: '12px'}}>{contact.name.title} {contact.name.first} {contact.name.last}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography
                                    sx={{fontSize: '12px'}}>{format(new Date(contact.dob.date), "yyyy/MM/dd")}</Typography>
                                <Typography sx={{fontSize: '12px'}}>{contact.dob.age} years</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <CopyElement value={contact.email}/>
                            </TableCell>
                            <TableCell align="left">
                                <CopyElement value={contact.phone}/>
                            </TableCell>
                            <TableCell align="left">
                                <Typography
                                    sx={{fontSize: '12px'}}>{contact.location.country} {contact.location.postcode} {contact.location.city} {contact.location.street.name} {contact.location.street.number}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography sx={{fontSize: '12px'}}>{NATIONALITIES_HUMAN_NAME[contact.nat]}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactsTable;