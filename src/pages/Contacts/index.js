import React from 'react';
import {
    Box,
    CircularProgress,
    Container,
    Grid,
    Typography
} from "@mui/material";
import {styled} from '@mui/material/styles';
import {useContacts} from "../../hooks/useContacts";
import ContactsTable from "../../components/ContactsTable";
import ToggleDataViewMode from "../../components/ToggleDataViewMode";
import {DATA_VIEW_MODES} from "./constans";
import {useDataViewMode} from "../../hooks/useDataViewMode"

const SuccessContainer = styled(Container)({
    marginTop: '24px',
});

const Contacts = () => {
    const [dataViewMode, setDataViewMode] = useDataViewMode();

    const contacts = useContacts();
    console.log(contacts);
    return (
        <SuccessContainer>
            <Grid container>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                    <Typography variant="h5" component="h1">
                        Contacts
                    </Typography>
                    <ToggleDataViewMode
                        dataViewMode={dataViewMode}
                        setDataViewMode={setDataViewMode}
                    />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    {
                        contacts.isLoading && <CircularProgress data-testid="contacts-loader" />
                    }
                    {
                        dataViewMode === DATA_VIEW_MODES.TABLE && !contacts.isLoading && <ContactsTable data={contacts.data}/>
                    }
                    {
                        dataViewMode === DATA_VIEW_MODES.GRID && !contacts.isLoading && <div data-testid="contacts-grid-container" >grid</div>
                    }
                </Grid>
            </Grid>
        </SuccessContainer>
    );
};

export default Contacts;