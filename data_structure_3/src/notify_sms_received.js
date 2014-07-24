function notify_sms_received(sms_json) {
    if (localStorage.is_signing_up = "true") {
        save_sign_up_message(sms_json)
    }
}
check_activity_phone_repeat=function(){
    
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