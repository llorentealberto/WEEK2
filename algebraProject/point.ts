
export class Point{

    private x: number;
    private y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    
    public setX(v : number) {
        this.x = v;
    }
    
    public setY(v : number) {
        this.y = v;
    }
    
    public getX() : number {
        return this.x;
    }
    
    public getY() : number {
        return this.y;
    }

    public toString(): void{
        console.log("(" + this.x + "," + this.y + ")");
    }

    public distanceToOrigin():number{
        return Math.sqrt(Math.pow(this.x , 2) + Math.pow(this.y , 2));
    }

    public calculateDistance(anotherPoint: Point):number{
        return Math.sqrt(Math.pow((anotherPoint.getX()-this.x),2) + Math.pow((anotherPoint.getY()-this.y),2));
    }

    public calculateQuadrant():number{
        let quadrant: number = 0;
        if(this.x == 0 || this.y == 0){
            quadrant = 0;
        }else if(this.x > 0 && this.y > 0){
            quadrant = 1;
        }else if(this.x < 0 && this.y > 0){
            quadrant = 2;
        }else if(this.x < 0 && this.y < 0){
            quadrant = 3;
        }else if(this.x > 0 && this.y < 0){
            quadrant = 4;
        }
        return quadrant;
    }

    public calculateNearest(points: Point[]):Point{
        //No debería estar hardcodeado.... Pero no se me ha ocurrido otra cosa
        let distancia: number = 100;
        let p: Point = new Point(0,0); 
        for(let punto in points){
            if(this.calculateDistance(points[punto]) < distancia){
                distancia = this.calculateDistance(points[punto]);
                p.setX(points[punto].getX());
                p.setY(points[punto].getY());
            }
        }
        return p
    }
}