function Bid(){
    this.name="竞价1"
    this.biddings=[]
}
create_new_bid=function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
   var act= _.find(activities, function (act) {
        return act.name == "first activity"
    })
    var bid=new Bid()
    act.bids.unshift(bid)
    localStorage.setItem("activities", JSON.stringify(activities))
}
