import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Sector {

    @Prop()
    name: string

    @Prop()
    maxLongitude:number

    @Prop()
    maxLatitude:number

    @Prop()
    minLatitude:number

    @Prop()
    minLongitude:number

}
export const SectorSchema = SchemaFactory.createForClass(Sector);
