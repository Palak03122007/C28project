class elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.009,
            length: 10
        }
        this.pointB = pointB;
        this.constr = Constraint.create(options);
        World.add(world, this.constr);
    }

    attach(body){
        this.constr.bodyA = body;
    }

    fly(){
        this.constr.bodyA = null;
    }

    display(){
        if(this.constr.bodyA){
        var pointA = this.constr.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}