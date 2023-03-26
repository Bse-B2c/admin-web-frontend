import React, { FC } from 'react';
import {
	Box,
	Paper,
	TableContainer,
	Table as MuiTable,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
} from '@mui/material';
import { v4 as uuidV4 } from 'uuid';

interface Data {
	[key: string]: any;
}

interface ScopedSlots {
	[key: string]: <T>(data: T, index: number) => JSX.Element;
}

interface TableStateProps {
	data: Array<Data>;
	fields: Array<string>;
	scopedSlots: ScopedSlots;
	customHeaderSlots?: { [key: string]: () => JSX.Element };
	size?: 'small' | 'medium';
}
interface TableDispatchProps {}

type TableProps = TableStateProps & TableDispatchProps;

const Table: FC<TableProps> = ({
	data,
	fields,
	scopedSlots,
	size = 'small',
	customHeaderSlots,
}) => {
	const fieldsExists: boolean = Array.isArray(fields) && fields.length > 0;
	const bodyExists: boolean = Array.isArray(data) && data.length > 0;

	const body =
		bodyExists && fieldsExists ? (
			data.map(itemRow => {
				return fields.map((field, index) => {
					const renderColumn = scopedSlots[field];

					return (
						<TableCell key={uuidV4()}>
							{renderColumn ? renderColumn(itemRow, index) : <div></div>}
						</TableCell>
					);
				});
			})
		) : (
			<TableCell colSpan={fields.length} align="center" size="medium">
				No items found
			</TableCell>
		);

	const header = fieldsExists
		? fields.map(field => {
				const renderColumnHeader = customHeaderSlots
					? customHeaderSlots[field]
					: undefined;

				return (
					<TableCell key={uuidV4()}>
						{renderColumnHeader ? renderColumnHeader() : field}
					</TableCell>
				);
		  })
		: null;

	return (
		<Box sx={{ width: '100%' }}>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<TableContainer>
					<MuiTable size={size}>
						<TableHead>
							<TableRow>{header}</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>{body}</TableRow>
						</TableBody>
					</MuiTable>
				</TableContainer>
			</Paper>
		</Box>
	);
};

export default Table;
