class Rope{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB: point2, 
            stiffness: 0.04,
            length: 200,
        }
        this.sling=Constraint.create(options)
    
        this.pointB=point2
        World.add(world,this.sling)
    }

   
    display(){
       
        strokeWeight(4)
        stroke("purple")
    
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, this.pointB.x,this.pointB.y)
        
    }
}