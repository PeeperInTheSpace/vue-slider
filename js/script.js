const slider = new Vue (
    
    {
    
        el : "#root",
        data : {
            activeIndex: 0,
            imagesArray: [

            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }

            ],

        },

        methods: {
            showPrev: function(){
                console.log("showPrev");

                if(this.activeIndex > 0){
                    this.activeIndex--;
                } else {
                    this.activeIndex = this.imagesArray.length -1;
                }
            },
            showNext (){
                if (this.activeIndex === this.imagesArray.length -1) {
                    this.activeIndex = 0;
                } else {
                    this.activeIndex++;
                }
            }
        }

    }
)