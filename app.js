(function () {
  var app = angular.module('icecreamStore', [])

  app.controller('StoreController', function() {
    this.products = icecreams
  })

  var icecreams = [
    {
      name: 'Chocolate Monolit',
      price: 2.5,
      description: 'Made with real chocolate. Not cocoa powder!',
      images: 'http://cdn6.bigcommerce.com/s-owv5nj/product_images/uploaded_images/chocolate-ice-cream.jpg?t=1463032837',
      reviews: [
        {
          rating: 5,
          description: 'Cant beat a classic',
          reviewer: 'Tiakarete Aroha'
        }
      ]
    },
    {
      name: 'Vanilla',
      price: 2,
      description: 'Made with real vanilla beans. Not vanilla essence!',
      images: 'http://www.proprofs.com/quiz-school/upload/yuiupload/1231897629.jpg',
      reviews: [
        {
          rating: 1,
          description: 'Boring azz',
          reviewer: 'Piiki Puku'
        }
      ]
    },
    {
      name: 'Hockey Pockey',
      price: 4,
      description: 'Made with real hockey pockey. Not frozen golden syrup!',
      images: 'https://www.fonterrafoodservice.co.nz/thumbs/600x600r/2015-09/tt-0000s-0012-hokeypokey.png',
      reviews: [
        {
          rating: 5,
          description: 'Very crunchy and balanced',
          reviewer: 'Hoki Te Poki'
        },
        {
          rating: 1,
          description: 'No teeth left, too hard.  Felt like I was biting rocks',
          reviewer: 'Manawa Kino'
        }
      ]
    },
    {
      name: 'Sundae Mondaye Fundaye Pundaye',
      price: 7,
      description: 'Made with everything - not recommended if you have allergies',
      images: 'http://cdn1.bostonmagazine.com/wp-content/uploads/2013/06/7-5.jpgg',
      reviews: [
        {
          rating: 5,
          description: 'Best Sundae EVER!',
          reviewer: 'Aihi Kirimi'
        },
        {
          rating: 3,
          description: 'Heart attack on a plate',
          reviewer: 'Manawa Kino'
        }
      ],
    },
  ]
})()