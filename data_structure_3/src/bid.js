function Bid() {
    this.name = "竞价1"
    this.biddings = []
}

create_new_bid=function(){
    var bids = JSON.parse(localStorage.getItem("bids"))
    this.name="竞价"+(bids.length+1)
    var bid=new Bid()
    bids.unshift(bid)
    localStorage.setItem("bids",JSON.stringify(bids))

}
render_bids=function(){
    var bids = JSON.parse(localStorage.getItem("bids"))
    return bids
}
render_biddings=function(){
    var bids = JSON.parse(localStorage.getItem("bids"))
    return (_.findWhere(bids,{name:"竞价2"}).biddings)
}
render_sign_ups=function(){
    var sign_ups = JSON.parse(localStorage.getItem("sign_ups"))
    console.log(sign_ups)
    return (_.filter(sign_ups,function(sign){return sign.activity_id=="1"}))
}