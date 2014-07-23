function notify_sms_received(sms_json) {
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var activities = JSON.parse(localStorage.getItem("activities"))
    if (localStorage.is_signing_up == "true") {
        if (!check_activity_status_bm(sms_json)) {
           save_message(sms_json)
        }
    }
    if(localStorage.is_bidding=='true' && check_bid_status_jj(sms_json) && !check_bid_phone_repeat(sms_json)){
        var price = message.substr(2).trim()
        var apply_phone = sms_json.messages[0].phone
        var bid_message = {'phone': apply_phone, 'price': price}
        activities[localStorage.current_activity_id].biddings[ localStorage.current_bid].unshift(bid_message)
        localStorage.setItem("activities", JSON.stringify(activities))
    }

}
save_bid_message = function (sms_json) {
    var activities = JSON.parse(localStorage.getItem("activities"))
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var price = message.substr(2).trim()
    var apply_phone = sms_json.messages[0].phone
    var bid_message = {'phone': apply_phone, 'price': price}



}
check_bid_status_jj = function (sms_json) {
    var act_list = JSON.parse(localStorage.getItem("activities"));
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var apply_phone = sms_json.messages[0].phone
    if (message.search(/jj/i) == 0) {
        var act =act_list[localStorage.current_activity_id].sign_ups
        return( _.find(act, function (act) {
            return act.phone == apply_phone
        }))
    }

}
check_bid_phone_repeat=function(sms_json){
    var activities = JSON.parse(localStorage.getItem("activities"));
    var apply_phone = sms_json.messages[0].phone
    var activity=activities[localStorage.current_activity_id].biddings[localStorage.current_bid]
    return( _.find(activity,function(act){ return act.phone==apply_phone}))

}
save_message = function (sms_json) {
    var activities = JSON.parse(localStorage.getItem("activities"))
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var apply_name = message.substr(2).trim()
    var apply_phone = sms_json.messages[0].phone
    var apply_array = {'name': apply_name, 'phone': apply_phone}
   // activities[0].sign_ups.push(apply_array)
    _.findWhere(activities, {id: localStorage.current_activity_id}).sign_ups.unshift(apply_array)
    localStorage.setItem("activities", JSON.stringify(activities))

}
check_activity_status_bm = function (sms_json) {
    var act_list = JSON.parse(localStorage.getItem("activities"));
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var apply_phone = sms_json.messages[0].phone
    if (message.search(/bm/i) == 0) {
        var act = _.findWhere(act_list, {id: localStorage.current_activity_id}).sign_ups
        return( _.find(act, function (act) {
            return act.phone == apply_phone
        }))
    }

}