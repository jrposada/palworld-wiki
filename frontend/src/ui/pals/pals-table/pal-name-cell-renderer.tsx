import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@mui/material';
import { CustomCellRendererProps } from 'ag-grid-react';
import { memo } from 'react';
import { Pal } from 'shared/models/pal';

const Renderer = ({
    data,
    value,
}: CustomCellRendererProps<Pal, string, unknown>): JSX.Element => {
    return (
        <Link href={data?.link} rel="noreferrer nofollow" target="_blank">
            {value}
            <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                style={{ marginLeft: '0.5rem' }}
            />
        </Link>
    );
};

export const PalNameCellRenderer = memo(Renderer);
