import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Search } from './entities/search';
import { Sector } from './entities/sector';
import { MongoService } from './mongo.service';

@Controller()
export class MongoController {
  constructor(private readonly mongoService: MongoService) {}

  @MessagePattern({cmd: 'get_searchs'})
  async findAllSearchsById(userId: string): Promise<Search[]>{
    return this.mongoService.findAllSearchsById(userId)
  }

  @MessagePattern({cmd: 'get_all_searchs'})
  async findAllSearchs(): Promise<Search[]>{
    return this.mongoService.findAllSearchs()
  }
  
  @MessagePattern({cmd: 'get_sectors'})
  async findAllSectors(): Promise<Sector[]>{
    return this.mongoService.findAllSectors()
  }

  @MessagePattern({cmd: 'create_search'})
  async create(search: Search): Promise<Search>{  
    return this.mongoService.createSearch(search)
  }

  @MessagePattern({cmd: 'set_state_search'})
  async setStateSearch(data:any): Promise<Search>{  
    return this.mongoService.setStateSearch(data.search, data.state)
  }
  
}
