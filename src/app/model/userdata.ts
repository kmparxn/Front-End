export interface Pokedex {
    pageNumber:   number;
    pageSize:     number;
    totalPages:   number;
    totalRecords: number;
    data:         Datum[];
    succeeded:    boolean;
    errors:       null;
    message:      null;
}

export interface Datum {
    id:       number;
    name:     string;
    lastName: string;
    date:     Date;
    adress:   string;
    gender:   string;
    age:      number;
}