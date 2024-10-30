export class UpdatePaymentDto {
    transaction_id?: number;
    amount?: number;
    payment_date?: Date; 
    payment_method?: string;
}
