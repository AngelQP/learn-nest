import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v7 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto} from './dto';

@Injectable()
export class CarsService {

    private cars : Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // }
    ]

    public findAll() {
        return this.cars;
    }

    public findOneById(id: string){
        const car = this.cars.find(car => car.id === id);

        if(!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car;
    }

    public create( createCarDto : CreateCarDto) {

        const car: Car = {
            id : uuid(),
            ...createCarDto
        }

        this.cars.push(car);

        return car;
    }

    public update(id: string, updateCarDto: UpdateCarDto){

        let carDB = this.findOneById(id);

        this.cars = this.cars.map(car => {
            if(car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
            }

            return car;
        });

        return carDB;
    }

    fillCarsWithSeedData( cars: Car[]){
        this.cars = cars;
    }


}
