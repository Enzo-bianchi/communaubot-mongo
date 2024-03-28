import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Search, State } from './entities/search';
import { Sector } from './entities/sector';

@Injectable()
export class MongoService {

  constructor(
    @InjectModel(Sector.name) private sectorModel: Model<Sector>,
    @InjectModel(Search.name) private searchModel: Model<Search>
  ) {}
  
  async createSearch(search: Search): Promise<Search> {
    const s = new this.searchModel(search)
    return s.save().then(s => s.populate('sector'));
  }

  async findAllSearchsById(userId:string): Promise<Search[]> {
    return this.searchModel.find({userId:userId}).populate('sector').exec();
  }

  async findAllSearchs(): Promise<Search[]> {
    return this.searchModel.find({state:'ongoing'}).populate('sector').exec();
  }

  async findAllSectors(): Promise<Sector[]> {
    return await this.sectorModel.find().exec();
  }

  async setStateSearch(search: Search, state:string) :Promise<Search>{
    const s = await this.searchModel.findById(search._id).exec();
    s.state = State[state.toUpperCase()]
    return s.save();
  }
}
