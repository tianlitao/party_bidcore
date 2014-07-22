function Activity(activity_name){
    this.name=activity_name
    this.sign_ups=[]
    this.bids=[]
}
Activity.prototype.create=function(){
    var activity_json = JSON.parse(localStorage.activities);
    activity_json.unshift(this)
    localStorage.setItem("activities", JSON.stringify(activity_json))
}
Activity.prototype.active=function(activity_name){
    localStorage.current_activity=activity_name
}