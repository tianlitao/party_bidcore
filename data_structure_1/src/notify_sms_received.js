function notify_sms_received(sms_json){
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var activities = JSON.parse(localStorage.getItem("activities"))
    var apply_name = message.substr(2).trim()
    var apply_phone = sms_json.messages[0].phone
    var apply_array = {'name': apply_name, 'phone': apply_phone}
    var act = _.findWhere(activities, {name: localStorage.current_activity}).sign_ups
var judge= _.find(act, function (act){
        return act.phone == apply_phone
    })
    if(!judge) {
        console.log("2")
        _.findWhere(activities, {name: localStorage.current_activity}).sign_ups.push(apply_array)
        localStorage.setItem("activities", JSON.stringify(activities))
    }
}