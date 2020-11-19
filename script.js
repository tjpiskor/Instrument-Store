new Vue({
  el: "#app",
  data: {
    instrumentName: "",
    instrumentType: "",
    brandInput: "",
    priceInput: "",
    colorInput: "",
    add: 0,
    empty: "",
    typeInput: "",
    buttons: "Add to Cart",
    showNew: false,
    newItem: {},
    
    instruments: [
      {
        name: "Guitar",
        type: "Electric",
        price: "5,500.00",
        brand: "Fender",
        img: "https://images.reverb.com/image/upload/s--goGJkf6n--/f_auto,t_supersize/v1548777839/mrd9ijmsjwije5whjbne.png",
        color: "red",
        show: false
      },
      {
        name: "Starcaster Drums",
        type: "Drums",
        price: "4,500.00",
        brand: "Fender",
        img: "https://images.reverb.com/image/upload/s--OCd5Lcqm--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1483750443/ilctegjpbcasiqllgdf1.jpg",
        color: "red",
        show: false
      },
      {
        name: "Piano",
        type: "Grand",
        price: "36,000.00",
        brand: "Yamaha",
        img: "https://billjonesmusic.com/wp-content/uploads/2018/11/gb1k.jpg",
        color: "green",
        show: false
      },
      {
        name: "Piano",
        type: "Digital",
        price: "200.00",
        brand: "Yamaha",
        img: "https://cdnm2-kraftmusic.netdna-ssl.com/media/catalog/product/cache/3fedc8207dcd37094c7cd808f4dc6b12/y/a/yam-psre373_top_3.jpg",
        color: "green",
        show: false
      },
      {
        name: "Mayo",
        type: "Instrument",
        price: "4.00",
        brand: "Maton",
        img: "https://target.scene7.com/is/image/Target/GUEST_402ba0b8-c94a-43a9-8ad1-fde1108c9d1c?wid=488&hei=488&fmt=pjpeg",
        color: "blue",
        show: false
      },
      {
        name: "Guitar",
        type: "Acoustic",
        price: "3,000.00",
        brand: "Maton",
        img: "https://www.worldofmusic.com.au/wp-content/uploads/2019/03/Maton-S808.jpg",
        color: "blue",
        show: false
      },
    ],
    
  },
  
  methods: {
    setZero: function(index, data) {
      this.add = 0;
      this.empty = "";
      
      this.instruments.push({
        name: "Guitar",
        type: "Electric",
        price: "5,500.00",
        brand: "Fender",
        img: "https://images.reverb.com/image/upload/s--goGJkf6n--/f_auto,t_supersize/v1548777839/mrd9ijmsjwije5whjbne.png",
        color: "red",
        show: false
      });
      
      this.instruments.push({
        name: "Starcaster Drums",
        type: "Drums",
        price: "4,500.00",
        brand: "Fender",
        img: "https://images.reverb.com/image/upload/s--OCd5Lcqm--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1483750443/ilctegjpbcasiqllgdf1.jpg",
        color: "red",
        show: false
      });
      
      this.instruments.push({
        name: "Piano",
        type: "Grand",
        price: "36,000.00",
        brand: "Yamaha",
        img: "https://billjonesmusic.com/wp-content/uploads/2018/11/gb1k.jpg",
        color: "green",
        show: false
      });
      
      this.instruments.push({
        name: "Piano",
        type: "Digital",
        price: "200.00",
        brand: "Yamaha",
        img: "https://cdnm2-kraftmusic.netdna-ssl.com/media/catalog/product/cache/3fedc8207dcd37094c7cd808f4dc6b12/y/a/yam-psre373_top_3.jpg",
        color: "green",
        show: false
      });
      
       this.instruments.push({
        name: "Mayo",
        type: "Instrument",
        price: "4.00",
        brand: "Maton",
        img: "https://target.scene7.com/is/image/Target/GUEST_402ba0b8-c94a-43a9-8ad1-fde1108c9d1c?wid=488&hei=488&fmt=pjpeg",
        color: "blue",
        show: false
      });
      
      this.instruments.push({
        name: "Guitar",
        type: "Acoustic",
        price: "3,000.00",
        brand: "Maton",
        img: "https://www.worldofmusic.com.au/wp-content/uploads/2019/03/Maton-S808.jpg",
        color: "blue",
        show: false
      });
   },
    storeAdd: function(index) {
      this.add = this.add + 1;
      this.instruments.splice(index, 1);
        if (this.add >= 6) {
          this.empty = "Sold Out! Come again tomorrow.";
      }
    },
    newInstrument: function() {
      this.instruments.push({
        name: this.instrumentName,
        type: this.instrumentType,
        brand: this.brandInput,
        price: this.priceInput,
        color: this.colorInput,
        show: false,
      });

      this.instrumentName = "";
    }
  }
});