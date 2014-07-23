function Bid() {
    this.name = "竞价1"
    this.biddings = []
}
create_new_bid = function () {
    var activities = JSON.parse(localStorage.getItem("activities"))
    var act = _.find(activities, function (act) {
        return act.name == "first activity"
    })
    var bid = new Bid()
    act.bids.unshift(bid)
    localStorage.setItem("activities", JSON.stringify(activities))
}
transform_bids_to_view_model = function () {
    var activities = JSON.parse(localStorage.getItem("activities"))
    return( _.find(activities, function (act) {
        return act.name == localStorage.current_activity
    }).bids
        )
}
transform_biddings_to_view_model=function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    var act= _.find(activities, function (act) {
        return act.name == localStorage.current_activity
    }).bids
    return(_.find(act,function(act){return act.name=="竞价2"})).biddings
}
render_sign_ups=function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
   return( _.find(activities, function (act) {
        return act.name == localStorage.current_activity
    })).sign_ups
}