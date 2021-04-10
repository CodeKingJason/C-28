class Chain{
    constructor(bodyA, p1){
        var options = {
            bodyA: bodyA,
            pointB: p1,
            stiffness: 0.07,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB = p1;
        World.add(world, this.chain);
        
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}