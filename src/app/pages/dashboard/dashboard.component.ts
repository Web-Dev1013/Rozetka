import { Component, OnInit } from "@angular/core";
// import Chart from 'chart.js';

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

  RecommendArr:any[] = [
    {cat: "", name: "", title: "", src: "../../../assets/img/product/Recommend/187230569_images_16983443436.jpg", description: "Liquid Leather 17ml Black (T459567-1)", price: "109₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/Recommend/228979933_images_18923106997.png", description: "Liquid Leather 50ml White (T459567-1-white-50ml)", price: "206₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/Recommend/liquid_leather_t459567_1_black_images_1442123998.jpg", description: "Liquid Leather for repairing leather goods white 17ml", price: "99₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/Recommend/liquid_leather_t459567_1_white_50ml_images_8996929065.jpg", description: "Liquid Leather (T459567)", price: "420₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/Recommend/liquid_leather_t459567_images_229175332.jpg", description: "Liquid Leather for repairing Leather goods", price: "99₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/Recommend/187230646_images_16983225043.jpg", description: "Farba gumova universal FARBEX", price: "139₴", rating: ""},
  ]
  BestsellerArr:any[] = [
    {cat: "", name: "", title: "", src: "../../../assets/img/product/bestseller/mirson_2200000046642_images_19660146991.jpg", description: "Pillow Sei Design Standard 50x70cm", price: "129₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/bestseller/mirson_2200000393005_images_19890974929.jpg", description: "Bamboo pillow MirSon Eco 0411 medium", price: "307₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/bestseller/mirson_2200001055537_images_19671832825.jpg", description: "Antiallergenic pillow Sleepingg 50x70", price: "115₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/bestseller/sei_design_4820182655876_images_14990823220.jpg", description: "Pillow MirSon EcoSilk No. 158 Eco Light", price: "129₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/bestseller/sei_design_4820182656132_images_14641960122.jpg", description: "Pillow Sei Design Delux 50x70cm White", price: "", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/bestseller/sleepingg_4820227283200_images_20472369076.jpg", description: "Antiallergenic pillow MirSon Eco Silver 142", price: "233₴", rating: ""},
  ]
  OutletArr:any[] = [    
    {cat: "", name: "", title: "", src: "../../../assets/img/product/outlet/elleci_unico125_68_images_11291067960.jpg", description: "Gamer Chair Hator Sport light Black/Red", price: "4199₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/outlet/elleci_unico125_73_images_11291078940.jpg", description: "Vitamin and mineral complex EntherMeal", price: "189₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/outlet/elleci_unico125_79_images_11291060232.jpg", description: "Gamer chair Hator Soort light Black/", price: "4499₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/outlet/enthermeal_d3znc060em085_images_20780307081.jpg", description: "Kitchen sink ELLECI Unico 125 Titanium 73", price: "4199₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/outlet/hator_htc_911_images_15985791739.jpg", description: "Kitchen sink ELLECI Unico 125 Bianco", price: "4199₴", rating: ""},
    {cat: "", name: "", title: "", src: "../../../assets/img/product/outlet/hator_htc_912_images_15985844022.jpg", description: "Kitchen sink ELLECI Unico 125 Aluminum", price: "4199₴", rating: ""},
  ]
}
