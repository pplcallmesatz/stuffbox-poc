$(document).ready(function () {
    var painPoint = window.location.search.substring(4);
    var userID = '';
    var status = false;
    $("a").click(function (e) {
        userID = $(this).attr("data-value");
        $("a").css('display','none')
        setTimeout(function () {
            afterChange();
        },500)
       $(".wrapper").css('display','flex')
    })

    var array =
        {
            painPoint_1: {
                user1: {
                    imageSrc: 'https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+1+User+1',
                    tiltle: 'You have selected Painpoint 1 and User 1',
                    sec_tiltle: 'Painpoint 1 and User 1          ',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user2: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+1+User+2",
                    tiltle: 'You have selected Painpoint 1 and User 2',
                    sec_tiltle: 'Painpoint 1 and User 2',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user3: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+1+User+3",
                    tiltle: 'You have selected Painpoint 1 and User 3',
                    sec_tiltle: 'Painpoint 1 and User 3',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user4: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+1+User+4",
                    tiltle: 'You have selected Painpoint 1 and User 4',
                    sec_tiltle: 'Painpoint 1 and User 4',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                }
            },
            painPoint_2: {
                user1: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+2+User+1",
                    tiltle: 'You have selected Painpoint 2 and User 1',
                    sec_tiltle: 'Painpoint 2 and User 1',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user2: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+2+User+2",
                    tiltle: 'You have selected Painpoint 2 and User 2',
                    sec_tiltle: 'Painpoint 2 and User 2',
                  description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user3: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+2+User+3",
                    tiltle: 'You have selected Painpoint 2 and User 3',
                    sec_tiltle: 'Painpoint 2 and User 3',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user4: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+2+User+4",
                    tiltle: 'You have selected Painpoint 2 and User 4',
                    sec_tiltle: 'Painpoint 2 and User 4',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                }
            },
            painPoint_3: {
                user1: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+3+User+1",
                    tiltle: 'You have selected Painpoint 3 and User ',
                    sec_tiltle: 'Painpoint 3 and User ',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user2: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+3+User+2",
                    tiltle: 'You have selected Painpoint 3 and User 2',
                    sec_tiltle: 'Painpoint 3 and User 2',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user3: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+3+User+3",
                    tiltle: 'You have selected Painpoint 3 and User 3',
                    sec_tiltle: 'Painpoint 3 and User 3',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user4: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+3+User+4",
                    tiltle: 'You have selected Painpoint 3 and User 4',
                    sec_tiltle: 'Painpoint 3 and User 4',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                }
            },
            painPoint_4: {
                user1: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+4+User+1",
                    tiltle: 'You have selected Painpoint 4 and User 1',
                    sec_tiltle: 'Painpoint 4 and User 1',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user2: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+4+User+2",
                    tiltle: 'You have selected Painpoint 4 and User 2',
                    sec_tiltle: 'Painpoint 4 and User 2',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user3: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+4+User+3",
                    tiltle: 'You have selected Painpoint 4 and User 3',
                    sec_tiltle: 'Painpoint 4 and User 3',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                },
                user4: {
                    imageSrc: "https://dummyimage.com/200x200/ebebeb/4049c7.png&text=Pain+Point+4+User+4",
                    tiltle: 'You have selected Painpoint 4 and User 4',
                    sec_tiltle: 'Painpoint 4 and User 4',
                    description: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.'
                }
            }
        }
    function afterChange() {
        $(".wrapper").css('display','none')
        $(".parent").css({
            transform: 'translateY(0)',
            transitionDuration:'0.5s'
        })

        $(".row").html("")
$(".buttons").hide();
        var painpointt = painPoint;
        var user = userID;
        var primary = '';
        var secondary = '';

        $.each(array, function (i, val) {
            $.each(val, function (key, value) {
                if (key.toLowerCase() == user.toLowerCase() && painpointt.toLowerCase() == i.toLowerCase()) {
                    primary = ('<div class="col-md-12 box"><div class="row i-c"><div class="col-md-6 col-sm-12"><div  class="image-width "><img style="width: 100%" class="img-responsive" src="https://dummyimage.com/1200x600/ebebeb/4049c7.png&text='+painpointt+' and '+ user +'" /></div></div><div class="col-md-6 col-sm-12"><div><h1>' + this.tiltle + '</h1><div><p>' + this.description + '</p></div></div></div></div></div>')
                } else {
                    secondary += ('<div class="col-md-3 box text-center"><div><img src="'+this.imageSrc+'" /></div><div><h3>' + this.sec_tiltle + '</h3></div></div>')
                }
            })
        })


        $('.card-box').append(primary)
        $('.card-box').append(secondary)
    }








    });

