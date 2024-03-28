import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Sector } from './sector';

export enum State {
    DONE = 'done',
    ONGOING = 'ongoing',
    ERROR = 'error'
}

@Schema()
export class Search {
    _id:string
    
    @Prop()
    userId: string

    @Prop()
    from:string

    @Prop()
    to:string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Sector' })
    sector:Sector

    @Prop({default:State.ONGOING})
    state:State

    @Prop()
    tokenFCM:string
}

export const SearchSchema = SchemaFactory.createForClass(Search);
