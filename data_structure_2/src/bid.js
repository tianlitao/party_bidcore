create_new_bid=function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    var bid="竞价"+(activities[localStorage.current_activity_id].bids.length+1)
    var bids=[]
    bids.push(bid)
    activities[localStorage.current_activity_id].bids=bids
    activities[localStorage.current_activity_id].biddings[bid]=[]
    localStorage.setItem("activities", JSON.stringify(activities))
}
transform_bids_to_view_model=function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    return activities[localStorage.current_activity].bids
}
transform_biddings_to_view_model=function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    return activities[localStorage.current_activity].biddings["竞价2"]
}
render_sign_ups=function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    return  activities[localStorage.current_activity].sign_ups
}