import React, { Component } from "react";

export default class DoiKinh extends Component {
  // Tạo giao diện layout
  // Tạo state gán chuổi JSON
  state = {
    ma: "",
    gia: "",
    tenSanPham: "",
    img: "",
    moTa: "",
  };
  // dùng vòng lặp tạo ra các nút bấm có gán hình ảnh
  arrSanPham = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  // Khi người dùng click vào thì gương trên mặt người dùng sẽ thay đổi
  render() {
    return (
      <div className="container">
        <div className="top">
          <img src="./img/model.jpg" width={500} height={500} alt="" />
          <div className="hinhAnh">
            <img src={this.state.img} alt="" />
          </div>
          <div className="content">
            <h5>{this.state.tenSanPham}</h5>
            <p>{this.state.gia}</p>
            <p>{this.state.moTa}</p>
          </div>
        </div>
        <div className="bottom">
          {this.arrSanPham.map((index) => {
            return (
              <button
                onClick={() => {
                  this.setState({
                    ma: index.id,
                    gia: index.price,
                    tenSanPham: index.name,
                    img: index.url,
                    moTa: index.desc,
                  });
                }}
                key={index}
              >
                <img src={index.url} alt="" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
