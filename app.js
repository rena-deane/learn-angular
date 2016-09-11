(function () {
  var app = angular.module('icecreamStore', [])

  app.controller('StoreController', function() {
    this.products = icecreams

    this.checkQty = function (quantity) {
      return quantity === 0
    }
  })

  var icecreams = [
    {
      name: 'Chocolate Monolit',
      price: 2.5,
      quantity: 10,
      description: 'Made with real chocolate. Not cocoa powder!',
      image: 'http://cdn6.bigcommerce.com/s-owv5nj/product_images/uploaded_images/chocolate-ice-cream.jpg?t=1463032837',
      reviews: [
        {
          rating: 5,
          description: 'Cant beat a classic',
          author: 'Tiakarete Aroha'
        }
      ]
    },
    {
      name: 'Vanilla',
      price: 2,
      quantity: 6,
      description: 'Made with real vanilla beans. Not vanilla essence!',
      image: 'http://www.proprofs.com/quiz-school/upload/yuiupload/1231897629.jpg',
      reviews: [
        {
          rating: 1,
          description: 'Boring azz',
          author: 'Piiki Puku'
        }
      ]
    },
    {
      name: 'Hockey Pockey',
      price: 4,
      quantity: 0,
      description: 'Made with real hockey pockey. Not frozen golden syrup!',
      image: 'https://www.fonterrafoodservice.co.nz/thumbs/600x600r/2015-09/tt-0000s-0012-hokeypokey.png',
      reviews: [
        {
          rating: 5,
          description: 'Very crunchy and balanced',
          author: 'Hoki Te Poki'
        },
        {
          rating: 1,
          description: 'No teeth left, too hard.  Felt like I was biting rocks',
          author: 'Manawa Kino'
        }
      ]
    },
    {
      name: 'Sundae Mondaye Fundaye Pundaye',
      price: 7,
      quantity: 2,
      description: 'Made with everything - not recommended if you have allergies',
      image: 'http://cdn1.bostonmagazine.com/wp-content/uploads/2013/06/7-5.jpg',
      reviews: [
        {
          rating: 5,
          description: 'Best Sundae EVER!',
          author: 'Aihi Kirimi'
        },
        {
          rating: 3,
          description: 'Heart attack on a plate',
          author: 'Manawa Kino'
        }
      ],
    },
  ]
})()