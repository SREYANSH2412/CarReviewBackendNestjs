import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dealer, DealerDocument } from './schema/dealer.schema';
import ModuleDefiner from 'src/utils/module_definer';
import { Model } from 'mongoose';
import { DealerBasicService } from './dealer.basic.service';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { LoginDealer } from './dto/login.dto';
import { Car, CarDocument } from 'src/car/schema/car.schema';

@Injectable()
export class DealerService {
    constructor(
        @InjectModel(Dealer.name, ModuleDefiner.carDB)
        private dealerModel: Model<DealerDocument>,

        @InjectModel(Car.name, ModuleDefiner.carDB)
        private carModel: Model<CarDocument>,

        private jwtService: JwtService,
        private readonly dealerBasicService: DealerBasicService,
    ) {}

    async create(createDealerDto: CreateDealerDto): Promise<{ token: string }> {
        const { password } = createDealerDto;
        createDealerDto.password = await bcrypt.hash(password, 10);

        const user = await this.dealerModel.create(createDealerDto);

        const token = this.jwtService.sign({ id: user._id});

        return { token }
    }

    async login(loginDealer: LoginDealer): Promise<{ token: string }>{
        const { email, password } = loginDealer;

        const user = await this.dealerModel.findOne({ email });

        if(!user){
            throw new UnauthorizedException("Invalid Email or Password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            throw new UnauthorizedException("Invalid Email or Password");
        }

        const token = this.jwtService.sign({ id: user._id});
        return { token };
    }
    
    async fetchCars (id: string) {
        const cars = await this.carModel.find({ DealerID: id });

        return cars;
    }
}
