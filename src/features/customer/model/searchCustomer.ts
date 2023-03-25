export interface SearchCustomer {
	name?: string;
	startDate?: string;
	endDate?: string;
	orderBy?: string;
	sortOrder: string;
	page: number;
	limit: number;
}
