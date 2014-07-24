function Activity(activity_name){
    this.name=activity_name
    this.sign_ups=[]
    this.bids=[]
    this.biddings={}
}
Activity.prototype.create=function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    var activity_ids=JSON.parse(localStorage.getItem("activity_ids"))
    var activity_id=JSON.stringify(activity_ids.length)
console.log(Object.keys(activity_ids).length)
activities[activity_id]=this
    localStorage.setItem("activity_ids", JSON.stringify(activity_ids))
    localStorage.setItem("activities", JSON.stringify(activities))
    localStorage.current_activity=0
    localStorage.activity_id_generator=3
}