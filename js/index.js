function ShowList() {
  // tự động đóng mở
  document.getElementById("danhSach").classList.toggle("unShow");
}

function ShowProduct() {
  // tự động đóng mở
  document.getElementById("danhSachSP").classList.toggle("unShow");
  document.getElementById("seeMore").classList.toggle("unShow");
}

const ListProduct = document.querySelector(".list-product");
const SeeMore = document.querySelector(".see_more");
const iconShowDown = document.querySelector(".icon-see_down");
const iconSHowUp = document.querySelector(".icon-see_up");
let isSeeMore = false;
SeeMore.addEventListener("click", () => {
  isSeeMore = !isSeeMore;
  if (isSeeMore) {
    ListProduct.classList.add("showListPr");
    ListProduct.classList.add("hieuUngShow");
    iconShowDown.classList.add("unShow");
    iconSHowUp.classList.remove("unShow");
  } else {
    ListProduct.classList.remove("showListPr");
    ListProduct.classList.add("hieuUngShow");
    iconShowDown.classList.remove("unShow");
    iconSHowUp.classList.add("unShow");
  }
});
