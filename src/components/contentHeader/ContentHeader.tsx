import React, { FC, ReactNode } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

interface ContentHeaderStateProps {
	/**
	 * Content Header Title
	 */
	title: string;
	/**
	 * Url to go back to previous page
	 */
	previousUrl?: string;
	/**
	 * Activate Back Button
	 */
	backButton?: boolean;
	/**
	 * Element to render at end of header
	 */
	endAdornment?: ReactNode;
	/**
	 * Page Content
	 */
	children: ReactNode;
}
interface ContentHeaderDispatchProps {}

type ContentHeaderProps = ContentHeaderStateProps & ContentHeaderDispatchProps;

/**
 *
 * @example
 * ´Simple Usage´
 *
 * <ContentHeader title="Customer">
 * 	<div>Body</div>
 * </ContentHeader>
 *
 * ´With back button´
 *
 * <ContentHeader title="Customer" backButton previousUrl="/dashboard">
 * 	<div>Body</div>
 * </ContentHeader>
 *
 * ´With a button at the end of the header´
 *
 * <ContentHeader title="Customer" backButton previousUrl="/dashboard" endAdornment={
 *   <Button
 * 					color={'success'}
 * 					size={'small'}
 * 					variant="outlined"
 * 					startIcon={<Add />}>
 * 					New Customer
 * 				</Button>
 * }>
 * 	<div>Body</div>
 * </ContentHeader>
 * */
const ContentHeader: FC<ContentHeaderProps> = ({
	title,
	backButton,
	previousUrl,
	endAdornment,
	children,
}) => {
	return (
		<Grid container direction={'column'} spacing={2}>
			<Grid item xs>
				<Grid container>
					<Grid item xs={8} sm={8} md={9} lg={10}>
						<div>
							<Typography variant={'h5'}>{title ?? ''}</Typography>
							{backButton && (
								<Button
									color={'secondary'}
									size={'small'}
									startIcon={<ArrowBack />}
									href={previousUrl ?? '/dashboard'}>
									Back
								</Button>
							)}
						</div>
					</Grid>
					{endAdornment ? (
						<Grid item xs={4} sm={4} md={3} lg={2} sx={{ textAlign: 'end' }}>
							{endAdornment}
						</Grid>
					) : null}
				</Grid>
			</Grid>
			<Grid item xs>
				{children}
			</Grid>
		</Grid>
	);
};

export default ContentHeader;
