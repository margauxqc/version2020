$(document).ready(function(){
    $(".indexheader").hover(function(){
   		$('.headergrid').attr('class', 'headergrid ' +this.dataset.bgclass);
    })
});