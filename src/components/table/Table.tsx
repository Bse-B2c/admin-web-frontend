import React, { FC, ChangeEvent } from 'react';
import {
	Box,
	Paper,
	TableContainer,
	Table as MuiTable,
	TableHead,
	TableRow,
	TableBody,
	TableCell,
	TablePagination,
} from '@mui/material';
import { v4 as uuidV4 } from 'uuid';

interface Data {
	[key: string]: any;
}

interface ScopedSlots {
	[key: string]: (data: any, index: number) => JSX.Element;
}

interface Pagination {
	rowsPerPageOptions: Array<number>;
	count: number;
	rowsPerPage: number;
	page: number;
}

interface TableStateProps {
	data: Array<Data>;
	fields: Array<string>;
	scopedSlots: ScopedSlots;
	customHeaderSlots?: { [key: string]: () => JSX.Element };
	size?: 'small' | 'medium';
	paginationProps?: Pagination;
}
interface TableDispatchProps {
	onPageChange?: (event: unknown, newPage: number) => void;
	onRowsPerPageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

type TableProps = TableStateProps & TableDispatchProps;

const Table: FC<TableProps> = ({
	data,
	fields,
	scopedSlots,
	size = 'small',
	customHeaderSlots,
	paginationProps,
	onRowsPerPageChange,
	onPageChange,
}) => {
	const fieldsExists: boolean = Array.isArray(fields) && fields.length > 0;
	const bodyExists: boolean = Array.isArray(data) && data.length > 0;

	const body =
		bodyExists && fieldsExists ? (
			data.map(itemRow => {
				return (
					<TableRow key={uuidV4()}>
						{fields.map((field, index) => {
							const renderColumn = scopedSlots[field];

							return (
								<TableCell key={uuidV4()}>
									{renderColumn ? renderColumn(itemRow, index) : <div></div>}
								</TableCell>
							);
						})}
					</TableRow>
				);
			})
		) : (
			<TableRow>
				<TableCell colSpan={fields.length} align="center" size="medium">
					No items found
				</TableCell>
			</TableRow>
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
						<TableBody>{body}</TableBody>
					</MuiTable>
				</TableContainer>
				{paginationProps && onPageChange && onRowsPerPageChange && (
					<TablePagination
						rowsPerPageOptions={paginationProps.rowsPerPageOptions}
						component="div"
						count={paginationProps.count}
						rowsPerPage={paginationProps.rowsPerPage}
						page={paginationProps.page}
						onPageChange={onPageChange}
						onRowsPerPageChange={onRowsPerPageChange}
					/>
				)}
			</Paper>
		</Box>
	);
};

export default Table;
