import React, { FC, ReactNode } from 'react';
import { Fade, Popper, Paper } from '@mui/material';
import { usePopperContext } from '@components/popper/PopperContext';
import { ResponsiveContent } from '@components/popper/content/ResponsiveContent';

interface ContentStateProps {
	children: ReactNode;
}
interface ContentDispatchProps {}

export type ContentProps = ContentStateProps & ContentDispatchProps;

const Content: FC<ContentProps> = ({ children }) => {
	const { anchorEl } = usePopperContext();
	const open = Boolean(anchorEl);

	return (
		<Popper
			modifiers={[
				{
					name: 'offset',
					options: {
						offset: [0, 8],
					},
				},
			]}
			open={open}
			anchorEl={anchorEl}
			transition
			placement={'bottom-start'}>
			{({ TransitionProps }) => (
				<Fade {...TransitionProps} timeout={350}>
					<ResponsiveContent>
						<Paper>{children}</Paper>
					</ResponsiveContent>
				</Fade>
			)}
		</Popper>
	);
};

export default Content;
