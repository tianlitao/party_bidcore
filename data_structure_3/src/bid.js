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

}