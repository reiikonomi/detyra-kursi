export interface IResponse<Data> {
    status: number;

    msg: string;

    payload: Data;
}
