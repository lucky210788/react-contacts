import React, {useCallback} from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import {DATA_VIEW_MODES} from "../../pages/Contacts/constans";
import PropTypes from "prop-types";

const ToggleDataViewMode = ({dataViewMode, setDataViewMode}) => {
    const handleChangeViewMode = useCallback((event, nextView) => {
        setDataViewMode(nextView);
    }, [setDataViewMode]);

    return (
        <ToggleButtonGroup
            value={dataViewMode}
            exclusive
            onChange={handleChangeViewMode}
        >
            <ToggleButton
                value={DATA_VIEW_MODES.GRID}
                aria-label={DATA_VIEW_MODES.GRID}
                disabled={dataViewMode === DATA_VIEW_MODES.GRID}
                data-testid="toggle-data-view-mode-grid"
            >
                <GridViewIcon fontSize="small"/>
            </ToggleButton>
            <ToggleButton
                value={DATA_VIEW_MODES.TABLE}
                aria-label={DATA_VIEW_MODES.TABLE}
                disabled={dataViewMode === DATA_VIEW_MODES.TABLE}
                data-testid="toggle-data-view-mode-table"
            >
                <FormatListBulletedIcon fontSize="small"/>
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

ToggleDataViewMode.propTypes = {
    dataViewMode: PropTypes.string.isRequired,
    setDataViewMode: PropTypes.func.isRequired,
}

export default ToggleDataViewMode;