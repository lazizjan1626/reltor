import { PartialType } from '@nestjs/mapped-types';
import { CreateContractDto } from './create-contract.dto';

export class UpdateContractDto extends PartialType(CreateContractDto) {
    id?: number;
    translation_id?: number;
    start_date?: Date;
    end_date?: Date;
    terms?: string;
}
