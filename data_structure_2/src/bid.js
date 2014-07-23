create_new_bid=function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    console.log(activities[0].bids)
    var act = _.find(activities, function (act) {
        return act.id == "0"
    })
    var bid=[]
    console.log(activities["0"].id)
    var a=_.findWhere(activities, {id: "1"})
    console.log(a)
    console.log(activities)

}