function Activity(activity_name) {
    this.name = activity_name
    this.id = "0"
}
Activity.prototype.create=function(){

    var activities = JSON.parse(localStorage.getItem("activities"))
this.id=activities.length+""
     activities.push(this)
    localStorage.setItem("activities", JSON.stringify(activities))
    localStorage.current_activity=0
    localStorage.activity_id_generator=activities.length

}