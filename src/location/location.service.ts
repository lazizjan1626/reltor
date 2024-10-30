import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Location } from './model/location.model';

@Injectable()
export class LocationService {
  constructor(@InjectModel(Location) private readonly locationModel :typeof Location){}
  create(createLocationDto: CreateLocationDto) {
    return this.locationModel.create(createLocationDto);
  }

  findAll() {
    return this.locationModel.findAll();
  }

  findOne(id: number) {
    return this.locationModel.findByPk(id);
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return this.locationModel.update(updateLocationDto, { where: { id } });
  }

  remove(id: number) {
    return this.locationModel.destroy({ where: { id } });
  }
}
