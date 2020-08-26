function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      console.log(width * height)
      return width * height;
    }
    console.log(0)
    return 0;
  }
  

  getRectArea(3, 4)   // 12
  getRectArea(-3, 4)  // 0
  // console.log(getRectArea(3, 4)); // 12
  // console.log(getRectArea(-3, 4)); // 0