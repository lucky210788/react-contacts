import React, {useCallback, useState} from 'react';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {Button, Tooltip} from "@mui/material";
import PropTypes from "prop-types";
import ClickAwayListener from '@mui/material/ClickAwayListener';

const STATUS_COPY = {
    COPY: 'copy',
    COPIED: 'copied'
};

const TITLE_BY_STATUS = {
    [ STATUS_COPY.COPY]: 'copy',
    [ STATUS_COPY.COPIED]: 'copied'
};

const CopyElement = ({value}) => {
    const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);

    const handleClickCopy = useCallback(() => {
        navigator.clipboard.writeText(value);
        setStatusCopy(STATUS_COPY.COPIED)
    }, [value]);

    const onMouseLeaveCopy = useCallback(() => {
        setStatusCopy(STATUS_COPY.COPY)
    }, [setStatusCopy]);

    return (
        <ClickAwayListener onClickAway={onMouseLeaveCopy}>
            <Tooltip title={TITLE_BY_STATUS[statusCopy]}>
                <Button
                    sx={{fontWeight: 400, padding: 0, fontSize: '12px'}}
                    onClick={handleClickCopy}
                >
                    <ContentCopyIcon sx={{marginRight: '10px'}} fontSize="small"/>
                    {value}
                </Button>
            </Tooltip>
        </ClickAwayListener>
    );
};

CopyElement.propTypes = {
    value: PropTypes.string.isRequired,
}

export default CopyElement;