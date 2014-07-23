function Activity(activity_name) {
    this.name = activity_name
    this.id = 0
}
Activity.prototype.create=function(){
//    var activity_json = JSON.parse(localStorage.getItem("activities"))

    localStorage.setItem("activities",JSON.stringify(activity_json))
    var activity_json = JSON.parse(localStorage.getItem("activities"))
    console.log(activity_json)

}