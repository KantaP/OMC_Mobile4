export class QuoteModel{
    constructor(
    public referrence: string,
    public pickupDate: string,
    public pickupTime: string,
    public returnDate: string,
    public returnTime: string,
    public collection: string,
    public extradrop: string,
    public destination: string,
    public asDirect: number,
    public passenger: number,
    public vehicle: number,
    public luggage: number,
    public journey: number
  ) {  }
}