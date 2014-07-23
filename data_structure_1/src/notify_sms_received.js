function notify_sms_received(sms_json) {
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var activities = JSON.parse(localStorage.getItem("activities"))
    var apply_name = message.substr(2).trim()
    var apply_phone = sms_json.messages[0].phone
    var apply_array = {'name': apply_name, 'phone': apply_phone}

    if (localStorage.is_signing_up == 'true') {
        if (!check_activity_status_bm(sms_json)) {
            save_message(sms_json)
        }
    }
    if(localStorage.is_bidding=='true' && !check_bid_phone_repeat(sms_json)){
        if (check_bid_status_jj(sms_json)) {

            save_bid_message(sms_json)
        }
    }
}
check_activity_status_bm = function (sms_json) {
    var act_list = JSON.parse(localStorage.getItem("activities"));
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var apply_phone = sms_json.messages[0].phone

    if (message.search(/bm/i) == 0) {
        var act = _.findWhere(act_list, {name: localStorage.current_activity}).sign_ups
        return( _.find(act, function (act) {
            return act.phone == apply_phone
        }))
    }

}
check_bid_status_jj = function (sms_json) {
    var act_list = JSON.parse(localStorage.getItem("activities"));
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var apply_phone = sms_json.messages[0].phone
    if (message.search(/jj/i) == 0) {
        var act = _.findWhere(act_list, {name: localStorage.current_activity}).sign_ups
        return( _.find(act, function (act) {
            return act.phone == apply_phone
        }))
    }

}
check_bid_phone_repeat=function(sms_json){
    var activities = JSON.parse(localStorage.getItem("activities"));
    var apply_phone = sms_json.messages[0].phone
    var activity = _.find(activities,function(act){
        return act.name==localStorage.current_activity
    })
   return( _.find(activity.bids[0].biddings,function(act){ return act.phone==apply_phone}))

}
save_message = function (sms_json) {
    var activities = JSON.parse(localStorage.getItem("activities"))
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var apply_name = message.substr(2).trim()
    var apply_phone = sms_json.messages[0].phone
    var apply_array = {'name': apply_name, 'phone': apply_phone}
    _.findWhere(activities, {name: localStorage.current_activity}).sign_ups.push(apply_array)
    localStorage.setItem("activities", JSON.stringify(activities))

}
save_bid_message = function (sms_json) {
    var activities = JSON.parse(localStorage.getItem("activities"))
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var price = message.substr(2).trim()
    var apply_phone = sms_json.messages[0].phone
    var activity = _.find(activities,function(act){
        return act.name==localStorage.current_activity
    })
    var act= _.find(activity.sign_ups,function(act){
        return act.phone==apply_phone
    })
    var bid_message = {'name': act.name, 'phone': apply_phone, 'price': price}
    activity.bids[0].biddings.push(bid_message)
    localStorage.setItem("activities", JSON.stringify(activities))


}