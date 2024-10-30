export class CreatePaymentDto {
    transaction_id: number;
    amount: number;
    payment_date: number;
    payment_method: string;
}
