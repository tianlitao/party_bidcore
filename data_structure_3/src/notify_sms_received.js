function notify_sms_received(sms_json) {
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    if (localStorage.is_signing_up == "true" && !check_activity_phone_repeat(sms_json) && message.search(/bm/i) == 0) {
        save_sign_up_message(sms_json)
    }
    if(localStorage.is_bidding == "true"  && message.search(/jj/i) == 0 && check_bid_activity_phone(sms_json) && !check_bid_phone_repeat(sms_json)){
        save_bid_message(sms_json)
    }
}
check_bid_phone_repeat=function(sms_json){
    var bids = JSON.parse(localStorage.getItem("bids"))
    var apply_phone = sms_json.messages[0].phone
    return(_.find(bids[0].biddings,function(bid){return bid.phone==apply_phone}))
}
check_bid_activity_phone=function(sms_json){
    var sign_ups = JSON.parse(localStorage.getItem("sign_ups"))
    var apply_phone = sms_json.messages[0].phone
    return (_.find(sign_ups,function(sign){return sign.phone==apply_phone}))
}
check_activity_phone_repeat=function(sms_json){
    var sign_ups = JSON.parse(localStorage.getItem("sign_ups"))
    var apply_phone = sms_json.messages[0].phone
   return( _.find(sign_ups,function(sign_ups){return sign_ups.phone==apply_phone}))
}
save_sign_up_message = function (sms_json) {
    var sign_ups = JSON.parse(localStorage.getItem("sign_ups"))
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var apply_name = message.substr(2).trim()
    var apply_phone = sms_json.messages[0].phone
    var apply_array = {'name': apply_name, 'phone': apply_phone, 'activity_id': localStorage.current_activity}

    sign_ups.unshift(apply_array)
    localStorage.setItem("sign_ups", JSON.stringify(sign_ups))

}
save_bid_message=function(sms_json){
    var bids = JSON.parse(localStorage.getItem("bids"))
    var sign_ups = JSON.parse(localStorage.getItem("sign_ups"))
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var bid_price = message.substr(2).trim()
    var apply_phone = sms_json.messages[0].phone
    var apply_name = _.findWhere(sign_ups, {phone:apply_phone}).name
console.log("吴京川")
   //     _.findWhere(sign_ups,function(sign){return sign.phone==apply_phone})
console.log(apply_name)
    var apply_array = {'name': apply_name,'price': bid_price, 'phone': apply_phone, 'activity_id': localStorage.current_activity}
    bids[0].biddings.unshift(apply_array)
    localStorage.setItem("bids", JSON.stringify(bids))
}